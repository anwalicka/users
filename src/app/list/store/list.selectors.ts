import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IList } from '../models/list-item.model';
import * as fromLists from './list.reducer';

export const selectUserstate = createFeatureSelector<fromLists.State>(
  fromLists.listsFeatureKey
);

export const selectList = createSelector(
  selectUserstate,
  state => state.lists
);

export const selectCurrentUserList = createSelector(
  selectUserstate,
  (state: fromLists.State, props: { userId: number }) =>
    state.lists.find((element: IList) => element.userId === props.userId)?.list
)
