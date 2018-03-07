type RGB = {
  r: number;
  g: number;
  b: number;
};
export function hexToRgb(color: string): RGB {
  const c = color.length === 6 ? color : `${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}`;
  return {
    r: parseInt(c.slice(0, 2), 16),
    g: parseInt(c.slice(2, 4), 16),
    b: parseInt(c.slice(4, 6), 16)
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  const rr = pad(parseInt(`${Math.max(Math.min(r, 255), 0)}`, 10).toString(16));
  const gg = pad(parseInt(`${Math.max(Math.min(g, 255), 0)}`, 10).toString(16));
  const bb = pad(parseInt(`${Math.max(Math.min(b, 255), 0)}`, 10).toString(16));

  return `${rr}${gg}${bb}`;
}

function pad(a: string | number): string {
  return `${a}`.length === 2 ? `${a}` : `0${a}`;
}
