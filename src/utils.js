
export function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

export function capfirst(text) {
  if (!text) {
    return '';
  }
  return text[0].toUpperCase() + text.substring(1).toLowerCase();
}
