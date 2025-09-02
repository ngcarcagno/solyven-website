export function darken(hex: string, amount: number): string {
  let c = hex.replace("#", "");
  if (c.length === 3)
    c = c
      .split("")
      .map((x) => x + x)
      .join("");
  let num = parseInt(c, 16);
  let r = Math.max(0, ((num >> 16) & 255) - Math.round(255 * amount));
  let g = Math.max(0, ((num >> 8) & 255) - Math.round(255 * amount));
  let b = Math.max(0, (num & 255) - Math.round(255 * amount));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export function lighten(hex: string, amount: number): string {
  let c = hex.replace("#", "");
  if (c.length === 3)
    c = c
      .split("")
      .map((x) => x + x)
      .join("");
  let num = parseInt(c, 16);
  let r = Math.min(255, ((num >> 16) & 255) + Math.round(255 * amount));
  let g = Math.min(255, ((num >> 8) & 255) + Math.round(255 * amount));
  let b = Math.min(255, (num & 255) + Math.round(255 * amount));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
