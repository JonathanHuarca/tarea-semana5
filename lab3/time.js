const util = require('util');

const getTime = () => {
  const now = new Date();
  return now.toISOString();
};

const get12HoursFormat = () => {
  const now = new Date();
  return formatTimeDisplay(
    now.getHours(),
    now.getMinutes(),
    now.getUTCSeconds()
  );
};

const get24HoursFormat = () => {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  return formatTimeDisplay(hours, now.getMinutes(), now.getUTCSeconds());
};

const getUTCFormat = () => {
  const now = new Date();
  return formatTimeDisplay(
    now.getUTCHours(),
    now.getUTCSeconds(),
    now.getUTCMinutes(),
    now.getUTCMilliseconds()
  );
};

const formatTimeDisplay = (h, m, s, ms = null) => {
  const addZeroIfRequired = (unity) => (unity < 10 ? `0${unity}` : unity);
  const formatPattern = ms ? '%s:%s:%s - %s' : '%s:%s:%s';

  return util.format(
    formatPattern,
    addZeroIfRequired(h),
    addZeroIfRequired(m),
    addZeroIfRequired(s),
    ms ? addZeroIfRequired(ms) : ''
  );
};

console.log(get12HoursFormat());
console.log(get24HoursFormat());

module.exports = {
  getTime,
  get12HoursFormat,
  get24HoursFormat,
  getUTCFormat,
};
