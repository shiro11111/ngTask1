import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {map, switchMap, catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { People } from '../people';
import { PeopleListService } from './people-list.service';
import {LoadPersonDetails, LoadPersonDetailsFail, LoadPersonDetailsSuccess} from './people-list.actions';
import {MatSnackBar} from '@angular/material';



@Injectable()
export class PeopleListEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private service: PeopleListService,
    private snackBar: MatSnackBar
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

  @Effect() loadPersonDetails$ = this.actions$.pipe(
    ofType('LOAD_PERSON_DETAILS'),
    map((action: LoadPersonDetails) => action.payload),
    switchMap((payload: {url: string}) => this.service.loadPersonDetails(payload.url).pipe(
      map((res: People) => new LoadPersonDetailsSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadPersonDetailsFail(error)))
    ))
  );

  @Effect({ dispatch: false }) loadPersonDetailsSuccess$ = this.actions$.pipe(
    ofType('LOAD_PERSON_DETAILS_SUCCESS'),
    tap(() => {
      this.snackBar.open('Poprawnie załadowano szczegóły', '', { duration: 3500 });
    }));
}
