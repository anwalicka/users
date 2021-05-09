import { Component, Input, OnChanges } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { element } from 'protractor';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IListItem } from '../../models/list-item.model';
import { ListService } from '../../services/list.service';
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
  lastId: Observable<number>;

  private subGuard$: Subject<void> = new Subject<void>();

  constructor(
    private listService: ListService
  ) { }

  ngOnChanges(): void {
    this.list$ = this.listService.getList(this.userId);
    this.lastId = this.list$.pipe(map(d => Math.max(...d.map(element => element.id)) + 1));
  }

  ngOnDestroy(): void {
    this.subGuard$.next();
    this.subGuard$.complete();
  }

  deleteListItem(id: number): void {
     this.listService.deleteItem(id, this.userId); 
  }
}
