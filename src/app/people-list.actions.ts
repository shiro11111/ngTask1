import { Action } from '@ngrx/store';
import { People } from './people';
import { HttpErrorResponse } from '@angular/common/http';

export const SHOW_CHARACTERS = 'SHOW_CHARACTERS';
export const SHOW_CHARACTERS_SUCCESS = 'SHOW_CHARACTERS_SUCCESS';
export const SHOW_CHARACTERS_FAIL = 'SHOW_CHARACTERS_FAIL';

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

export type PeopleListActions = ShowCharacters
| ShowCharactersSuccessAction
| ShowCharactersFailAction;
