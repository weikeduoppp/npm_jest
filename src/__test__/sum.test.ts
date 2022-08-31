// const sum = require("../sum");
// or 29 father test
import sum from 'utils/sum';

describe('sum', () => {
  it('可以做加法', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
