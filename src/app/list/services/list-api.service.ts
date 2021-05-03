import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from '../models/list-item.model';

@Injectable({
  providedIn: 'root'
})

export class ListApiService {
  private apiUrl: string = '../../../assets/list.json'
  
  constructor(
    private httpClient: HttpClient,
  ) { }

  getList(): Observable<IList[]> {
    return this.httpClient.get<IList[]>(this.apiUrl);
  }

  add(listItem: IList) {
    return this.httpClient.post<IList>(this.apiUrl, listItem);
  }
}
