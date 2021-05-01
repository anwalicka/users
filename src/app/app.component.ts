import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './user/models/user.model';
import { loadUsers } from './user/store/users.actions';
import { selectCurrentUser } from './user/store/users.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  list: any[] = [
    'listItem1',
    'listItem2',
    'listItem3',
  ];
  currentUser$: Observable<User>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.currentUser$ = this._selectCurrentUser();
  }

  private _selectCurrentUser(): Observable<User> {
    return this.store.select(selectCurrentUser);
  }
}
