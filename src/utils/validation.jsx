export const assert = (condition, errMsg) => {
  if (typeof condition !== 'function') throw new Error('Condition must be a function');
  if (condition()) throw new Error(errMsg);
};
