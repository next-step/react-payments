const random = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 16) + 1)
    .map((n) => n.toString(16))
    .join("");
};

export default random;
