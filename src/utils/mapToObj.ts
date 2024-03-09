const mapToObj = (map: Map<unknown, unknown>) => {
  if (map.constructor !== Map) {
    throw new Error('mapToObj: map is not a Map');
  }
  return Object.fromEntries(map);
};

export default mapToObj;
