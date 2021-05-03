import { Component, Input, OnChanges } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IListItem } from '../../models/list-item.model';
import { selectCurrentUserList } from '../../store/list.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent implements OnChanges {
  @Input() userId: number;

  list$: Observable<IListItem[]>;
  faSort = faSort;

  constructor(
    private store: Store
  ) { }

  ngOnChanges(): void {
    this.list$ = this.getList();
  }

  private getList(): Observable<IListItem[]> {
    return this.store.select(state =>
      selectCurrentUserList(state, { userId: this.userId }));
  }
}
