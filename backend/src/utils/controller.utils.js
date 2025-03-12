// Helper function to convert duration string to milliseconds
exports.ms = (duration) => {
  const regex = /^(\d+)([smhdw])$/;
  const match = regex.exec(duration);

  if (!match) {
    return 7 * 24 * 60 * 60 * 1000; // Default to 7 days in milliseconds
  }

  const value = parseInt(match[1]);
  const unit = match[2];

  const units = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    w: 7 * 24 * 60 * 60 * 1000
  };

  return value * units[unit];
};
