const objToMap = (obj: object) => {
  const entries = Object.entries(obj);
  return new Map(entries);
};
export default objToMap;
