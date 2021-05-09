import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IListItem } from '../models/list-item.model';
import { deleteListItem } from '../store/list.actions';
import { selectCurrentUserList } from '../store/list.selectors';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private store: Store) { }

  getList(userId: number): Observable<IListItem[]> {
    return this.store.select(state =>
      selectCurrentUserList(state, { userId }))
  }

  deleteItem(id: number, userId: number) {
    return this.store.dispatch(deleteListItem({id, userId}));
  }
}
