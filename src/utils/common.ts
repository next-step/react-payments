const cn = (classNames: unknown[]) => {
  return classNames.filter(Boolean).join(' ');
};

const mapToObj = (map: Map<unknown, unknown>) => {
  if (map.constructor !== Map) {
    throw new Error('mapToObj: map is not a Map');
  }
  return Object.fromEntries(map);
};

const objToMap = (obj: object) => {
  const entries = Object.entries(obj);
  return new Map(entries);
};
export { cn, mapToObj, objToMap };
