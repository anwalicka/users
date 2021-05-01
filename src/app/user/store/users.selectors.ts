import {createFeatureSelector, createSelector} from '@ngrx/store';
import { User } from '../models/user.model';
import * as fromUsers from './users.reducer';

export const selectUserstate = createFeatureSelector<fromUsers.State>(
  fromUsers.usersFeatureKey
);

export const selectUsers = createSelector(
  selectUserstate,
  state => Object.values(state.userList),
);

export const selectCurrentUser = createSelector(
  selectUserstate,
  state => state.userList.find((userElement: User) => userElement.id === state.currentUserId)
);
