import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledButton } from "../../common/Button/styles";

// Honour either `transparent` (legacy) or `transparentBackdrop` prop
const Overlay = styled.div<{
  transparent?: boolean;
  transparentBackdrop?: boolean;
  visible?: boolean;
  animationMs?: number;
}>`
  position: fixed;
  inset: 0;
  background: ${(p: any) => (p.transparent || p.transparentBackdrop ? "transparent" : "rgba(0, 0, 0, 0.75)")};
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ${(p) => (p.animationMs ? p.animationMs : 400)}ms ease;
  opacity: ${(p) => (p.visible ? 1 : 0)};
  pointer-events: ${(p) => (p.visible ? "auto" : "none")};
`;

const Content = styled.div<{
  visible?: boolean;
  animationMs?: number;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ${(p) => (p.animationMs ? p.animationMs : 400)}ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity ${(p) => (p.animationMs ? p.animationMs : 400)}ms ease;
  transform: ${(p) => (p.visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.995)")};
  opacity: ${(p) => (p.visible ? 1 : 0)};
`;

const CloseButton = styled(StyledButton).attrs(() => ({
  focusColor: "var(--color-secondary)",
  focusTextColor: "#ffffff",
}))`
  position: absolute;
  top: calc(var(--header-height, 64px) + 0.75rem); /* place below header to avoid collision */
  right: 1rem;
  z-index: 20001; /* very high so it cannot be overlapped by header/hamburger */
  width: auto; /* don't force full-width like standard buttons */

  /* Use a solid burgundy background and white text to match site buttons */
  background: #5f0807;
  color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.25em 0.9375em rgba(95, 8, 7, 0.3);
`;

export default function FullScreenModal({
  children,
  onClose,
  transparentBackdrop,
  animationMs = 500,
}: {
  children: React.ReactNode;
  onClose: () => void;
  /** If true, the fullscreen overlay will be transparent instead of dark. */
  transparentBackdrop?: boolean;
  /** Duration of open/close animation in milliseconds */
  animationMs?: number;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const closingRef = useRef(false);
  const [isVisible, setIsVisible] = React.useState(false);

  // Open the modal with animation
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Slight timeout so CSS transitions can take effect
    requestAnimationFrame(() => setIsVisible(true));

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
        // start closing animation and call onClose after animationMs
        handleClose();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = React.useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, animationMs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, animationMs]);

  return (
    <Overlay
      ref={overlayRef}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      transparent={transparentBackdrop}
      visible={isVisible}
      animationMs={animationMs}>
      <Content onClick={(e) => e.stopPropagation()} visible={isVisible} animationMs={animationMs}>
        <CloseButton onClick={handleClose} aria-label="Cerrar diálogo">
          Cerrar
        </CloseButton>
        {children}
      </Content>
    </Overlay>
  );
}
