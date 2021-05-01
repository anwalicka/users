import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import { User } from '../models/user.model';
export const usersFeatureKey = 'users';

export interface State {
  userList: User[];
  currentUserId?: number;
}

export const initialState: State = {
  userList: [],
  currentUserId: 1
};

export const reducer = createReducer(
  initialState,

  on(UsersActions.loadUserSuccess, (state, { users }) => ({
    ...state,
    userList: users
  })),

  on(UsersActions.switchUser, (state, { id }) => ({
    ...state,
    currentUserId: +id,
  }))
);

