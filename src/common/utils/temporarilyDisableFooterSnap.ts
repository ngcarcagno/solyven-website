// Utilidad para desactivar temporalmente el snap del footer
export function temporarilyDisableFooterSnap(footerId = "footer-snap", timeout = 700) {
  const footerDiv = document.getElementById(footerId);
  if (!footerDiv) return;
  const prev = footerDiv.style.scrollSnapAlign;
  footerDiv.style.scrollSnapAlign = "none";
  setTimeout(() => {
    footerDiv.style.scrollSnapAlign = prev || "end";
  }, timeout);
}
