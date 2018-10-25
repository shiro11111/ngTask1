import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { People } from './people';
import { PaginatedList } from './models/paginated-list.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleListService {
  showCharacters(): Observable<People[]> {
    return this.http.get('https://swapi.co/api/people/').pipe(
      map((res: PaginatedList<People[]>) => res && res.results)
    ) as Observable<People[]>;
  }
  constructor(private http: HttpClient) { }
}


