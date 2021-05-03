import { Component, Input, OnChanges } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  private subGuard$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store
  ) { }

  ngOnChanges(): void {
    this.list$ = this.getList();
  }

  ngOnDestroy(): void {
    this.subGuard$.next();
    this.subGuard$.complete();
  }

  private getList(): Observable<IListItem[]> {
    return this.store.select(state =>
      selectCurrentUserList(state, { userId: this.userId }))
      .pipe(
        takeUntil(this.subGuard$)
      );
  }
}
