const getLeftDaysUntil = (date) => {
  const now = new Date().getTime();
  const until = new Date(date).getTime();
  const diff = until - now;

  return diff / (1000 * 60 * 60 * 24);
};

module.exports = getLeftDaysUntil;
