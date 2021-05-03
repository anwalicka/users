import { createReducer, on } from '@ngrx/store';
import { IList } from '../models/list-item.model';
import { loadListSuccess } from './list.actions';

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
  })
);
