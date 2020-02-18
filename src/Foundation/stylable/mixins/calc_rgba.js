function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function parseAlpha(value) {
  if (!value) {
    return 1;
  }

  if (value > 1) {
    return value / 100;
  }

  return value;
}

module.exports = function calc_rgba(color, transparency) {
  const rgb = hexToRgb(color);
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${parseAlpha(transparency)})`;
};
