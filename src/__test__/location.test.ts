// doc: https://github.yanhaixiang.com/jest-tutorial/basic/navigation/#mock-location

/*
  第一种方法使用 jest-environment-jsdom-global (opens new window)。 这种方法会在 global 全局对象挂一个 jsdom， 通过 jsdom 的 reconfigure API 来修改 JSDOM 环境的 url。

  第二种方法使用 jest-location-mock (opens new window)。 这种方法会监听 window.location.assign，通过它来改变网页地址。
*/

import getSearchObj from 'utils/location';

describe('getSearchObj', () => {
  it('可以获取当前网址的查询参数对象', () => {
    window.location.assign('https://www.baidu.com?a=1&b=2');

    expect(window.location.search).toEqual('?a=1&b=2');
    expect(getSearchObj()).toEqual({
      a: '1',
      b: '2',
    });
  });

  it('空参数返回空', () => {
    window.location.assign('https://www.baidu.com');

    expect(window.location.search).toEqual('');
    expect(getSearchObj()).toEqual({});
  });
});
