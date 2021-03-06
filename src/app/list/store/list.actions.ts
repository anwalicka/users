import { createAction, props } from '@ngrx/store';
import { IList } from '../models/list-item.model';

const actionsPrefix = '[List]';
export const loadList = createAction(`${actionsPrefix} Load List`);
export const loadListSuccess = createAction(`${actionsPrefix} Load List Success`, props<{ lists: IList[] }>());
export const loadListFailure = createAction(`${actionsPrefix} Load List Failure`, props<{ error: any }>());
export const addListItem = createAction(`${actionsPrefix} Add List Item`, props<{list: IList}>());
export const deleteListItem = createAction(`${actionsPrefix} Delete List Item`, props<{id: number, userId: number}>());