import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// Honour either `transparent` (legacy) or `transparentBackdrop` prop
const Overlay = styled.div<{
  transparent?: boolean;
  transparentBackdrop?: boolean;
}>`
  position: fixed;
  inset: 0;
  background: ${(p: any) => (p.transparent || p.transparentBackdrop ? "transparent" : "rgba(0, 0, 0, 0.75)")};
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  z-index: 10001;
`;

export default function FullScreenModal({
  children,
  onClose,
  transparentBackdrop,
}: {
  children: React.ReactNode;
  onClose: () => void;
  /** If true, the fullscreen overlay will be transparent instead of dark. */
  transparentBackdrop?: boolean;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    // Prevent background scroll while modal is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the modal
    const el = overlayRef.current as HTMLElement | null;
    const focusable = el?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable) {
      focusable.focus();
    } else if (el) {
      el.focus();
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "Tab") {
        // Basic focus trap: cycle through focusable elements inside the modal
        const nodes = el?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!nodes || nodes.length === 0) {
          e.preventDefault();
          return;
        }
        const first = nodes[0];
        const last = nodes[nodes.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow || "";
      // Restore focus to the element that had it before the modal opened
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus();
      }
    };
  }, [onClose]);

  return (
    <Overlay
      ref={overlayRef}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      transparent={transparentBackdrop}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Cerrar diálogo">
          Cerrar
        </CloseButton>
        {children}
      </Content>
    </Overlay>
  );
}
