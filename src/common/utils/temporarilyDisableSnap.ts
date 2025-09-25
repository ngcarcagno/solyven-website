// Utilidad modular para deshabilitar temporalmente el snap
export function temporarilyDisableSnap(containerSelector = "#scroll-snap-container", timeout = 600) {
  const container = document.querySelector(containerSelector);
  if (!container || !(container instanceof HTMLElement)) return;
  const prevSnap = container.style.scrollSnapType;
  container.style.scrollSnapType = "none";
  setTimeout(() => {
    container.style.scrollSnapType = prevSnap || "";
  }, timeout);
}
