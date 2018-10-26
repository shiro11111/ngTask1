import { Action } from '@ngrx/store';
import { People } from '../people';
import { HttpErrorResponse } from '@angular/common/http';

export const SHOW_CHARACTERS = 'SHOW_CHARACTERS';
export const SHOW_CHARACTERS_SUCCESS = 'SHOW_CHARACTERS_SUCCESS';
export const SHOW_CHARACTERS_FAIL = 'SHOW_CHARACTERS_FAIL';
export const LOAD_PERSON_DETAILS = 'LOAD_PERSON_DETAILS';
export const LOAD_PERSON_DETAILS_SUCCESS = 'LOAD_PERSON_DETAILS_SUCCESS';
export const LOAD_PERSON_DETAILS_FAIL = 'LOAD_PERSON_DETAILS_FAIL';
export const LOAD_PERSON_DETAILS_CLEAR = 'LOAD_PERSON_DETAILS_CLEAR';


export class ShowCharacters implements Action {
  readonly type = SHOW_CHARACTERS;
}

export class ShowCharactersSuccessAction implements Action {
  readonly type = SHOW_CHARACTERS_SUCCESS;

  constructor(public payload: People[]) {}
}

export class ShowCharactersFailAction implements Action {
  readonly type = SHOW_CHARACTERS_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export class LoadPersonDetails implements Action {
  readonly type = LOAD_PERSON_DETAILS;

  constructor(public payload: {url: string}) {}
}

export class LoadPersonDetailsSuccess implements Action {
  readonly type = LOAD_PERSON_DETAILS_SUCCESS;

  constructor(public payload: People) {}
}

export class LoadPersonDetailsFail implements Action {
  readonly type = LOAD_PERSON_DETAILS_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export class LoadPersonDetailsClear implements Action {
  readonly type = LOAD_PERSON_DETAILS_CLEAR;
}

export type PeopleListActions = ShowCharacters
| ShowCharactersSuccessAction
| ShowCharactersFailAction
| LoadPersonDetails
| LoadPersonDetailsSuccess
| LoadPersonDetailsFail
| LoadPersonDetailsClear;
