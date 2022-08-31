import storage from 'utils/storage';

describe('storage', () => {
  it('获取缓存值', () => {
    const val = 'payload';
    storage.set('new', val);
    expect(storage.get('new')).toEqual(val);
  });
  it('设置缓存值', () => {
    const val = 'payload';
    storage.set('new2', val);
    expect(storage.get('new2')).toEqual(val);
  });
});
