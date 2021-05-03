import { createReducer, on } from '@ngrx/store';
import { IList } from '../models/list-item.model';
import { addListItem, loadListSuccess } from './list.actions';

export const listsFeatureKey = 'lists';

export interface State {
  lists: IList[],
  sortingValue: string
}

export const initialState: State = {
  lists: [{
    userId: 1,
    list: [],
  }],
  sortingValue: 'id'
}

export const listReducer = createReducer(
  initialState,
  on(loadListSuccess, (state, { lists }) => {
    return {
      ...state,
      lists,
    }
  }),
  on(addListItem, (state, { list }) => {
    return {
      ...state,
      lists: [
        ...state.lists.filter(data => data.userId !== list.userId),
        {
          userId: list.userId,
          list: [
            ...state.lists.find(data => +data.userId === +list.userId).list,
            ...list.list
          ]
        }
      ]
    }
  })
);
