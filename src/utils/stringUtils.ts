export const replaceTo = (
  value: string,
  replacement: string,
  start: number,
  end: number
) => {
  const beforeReplaced = value.slice(0, start);
  const replacedLength = end - start < 0 ? 0 : end - start;
  const replaced = replacement.repeat(replacedLength);
  const afterReplaced = value.slice(end);
  return `${beforeReplaced}${replaced}${afterReplaced}`;
};

export const insertAtInterval = (
  value: string,
  insertStr: string,
  interval: number
) =>
  value
    .split("")
    .map((str, index) =>
      index !== 0 && index % interval === 0 ? `${insertStr}${str}` : str
    )
    .join("");
