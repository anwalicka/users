import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { switchUser } from '../../store/users.actions';
import { selectUsers } from '../../store/users.selectors';

@Component({
  selector: 'app-user-switch',
  templateUrl: './user-switch.component.html',
  styleUrls: ['./user-switch.component.scss']
})
export class UserSwitchComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.users$ = this._selectUsers();
  }

  selectUser(id: number): void {
    this.store.dispatch(switchUser({ id }));
  }

  private _selectUsers(): Observable<User[]> {
    return  this.store.select(selectUsers);
  }
}
