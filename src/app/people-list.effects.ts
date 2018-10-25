import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { People } from './people';
import { PeopleListService } from './people-list.service';

@Injectable()
export class PeopleListEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private service: PeopleListService
  ) { }

  @Effect() loadPeopleList$ = this.actions$.pipe(
      // Listen for the 'LOGIN' action
      ofType('SHOW_CHARACTERS'),
      switchMap(() => this.service.showCharacters().pipe(
        // If successful, dispatch success action with result
        map((res: People[]) => ({ type: 'SHOW_CHARACTERS_SUCCESS', payload: res })),
        // If request fails, dispatch failed action
        catchError((error: HttpErrorResponse) => of({ type: 'SHOW_CHARACTERS_FAIL' }))
      )));
}
