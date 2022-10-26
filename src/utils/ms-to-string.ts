export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
}

export function msToString(ms: number) {
  if (ms < 1) {
    return ms.toFixed(2) + " ms";
  }
  if (ms < 1000) {
    return ms.toFixed(1) + " ms";
  }
  if (ms < 60000) {
    return (ms / 1000).toFixed(1) + " s";
  }
  return (ms / 60000).toFixed(1) + " m";
}
