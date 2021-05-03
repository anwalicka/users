import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ListApiService } from '../services/list-api.service';
import { loadList, loadListSuccess } from './list.actions';

@Injectable()
export class ListEffects {

  loadList$ = createEffect(() => this.actions$.pipe(
    ofType(loadList),
    switchMap(() => this.listApiService.getList()),
    map((list) => loadListSuccess({lists: list})),
  ));

  constructor(private actions$: Actions, private listApiService: ListApiService) {}

}
