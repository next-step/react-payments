import { replaceStringChunkWithToken } from '.';

describe('replaceStringChunkWithToken', () => {
  it.each`
    strChunks                           | chunkIndexes | token  | expected
    ${['1234', '1234', '1234', '1234']} | ${[0, 1]}    | ${'*'} | ${['****', '****', '1234', '1234']}
    ${['1234', '1234', '1234', '1234']} | ${[2, 3]}    | ${'*'} | ${['1234', '1234', '****', '****']}
    ${['1234', '1234', '1234', '1234']} | ${[0, 2]}    | ${'*'} | ${['****', '1234', '****', '1234']}
    ${['1', '12', '123', '1234']}       | ${[2, 3]}    | ${'*'} | ${['1', '12', '***', '****']}
    ${['1', '12', '123', '1234']}       | ${[2, 3]}    | ${'$'} | ${['1', '12', '$$$', '$$$$']}
  `(
    'converts $strChunks with $token to $expected only corresponding to $chunkIndexes indexes.',
    ({ strChunks, chunkIndexes, token, expected }) => {
      const actual = replaceStringChunkWithToken(
        strChunks,
        chunkIndexes,
        token
      );
      expect(actual).toEqual(expected);
    }
  );

  it('throws an error if an index that is not in the chunk range is entered.', () => {
    expect(() => {
      replaceStringChunkWithToken(
        ['1234', '1234', '1234', '1234'],
        [3, 5],
        '*'
      );
    }).toThrowError();
  });
});
