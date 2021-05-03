import * as fromList from './list.actions';

describe('loadLists', () => {
  it('should return an action', () => {
    expect(fromList.loadList().type).toBe('[List] Load Lists');
  });
});
