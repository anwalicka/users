import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadList } from './list/store/list.actions';
import { User } from './user/models/user.model';
import { loadUsers } from './user/store/users.actions';
import { selectCurrentUser } from './user/store/users.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  currentUser$: Observable<User>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadList());
    this.currentUser$ = this.selectCurrentUser();
  }

  private selectCurrentUser(): Observable<User> {
    return this.store.select(selectCurrentUser);
  }
}
