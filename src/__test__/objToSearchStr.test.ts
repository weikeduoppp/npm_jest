/* 
  TDD：先测试，之后补充业务
  BDD：先写业务，再对重要部分补充测试
*/

import objToSearchStr from 'utils/objToSearchStr';

describe('objToSearchStr', () => {
  it('对象转换搜索值', () => {
    // {a: 1, b: 2} => a=1&b=2
    expect(
      objToSearchStr({
        a: 1,
        b: 2,
      }),
    ).toEqual('a=1&b=2');
  });
});
