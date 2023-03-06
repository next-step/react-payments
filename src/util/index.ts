export const replaceStringChunkWithToken = (
  strChunks: string[],
  chunkIndexes: number[],
  token: string
): string[] => {
  if (chunkIndexes.some((index) => index >= strChunks.length)) {
    throw new Error(
      'There is an index value that exceeds the input chunk size'
    );
  }
  const replacedChunks = [...strChunks];
  for (const index of chunkIndexes) {
    replacedChunks[index] = replacedChunks[index].replace(/./g, token);
  }

  return replacedChunks;
};
