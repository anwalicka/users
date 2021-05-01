import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private httpService: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    // use user.json file and httpService
    return this.httpService.get<any>("../../../assets/user.json")
      .pipe(map(resp => resp.userList));
  }
}
