import {Action} from '@ngrx/store';
import {People} from '../people';
import * as PeopleListActions from './people-list.actions';

export interface PeopleListState {
  list: People[];
  details: People;
}

const initialState: PeopleListState = {
  list: [],
  details: {}
};


export function peopleListReducer(state = initialState, action: PeopleListActions.PeopleListActions) {
  switch (action.type) {
    case PeopleListActions.SHOW_CHARACTERS:
      return {
        ...state,
      };

    case PeopleListActions.SHOW_CHARACTERS_SUCCESS:
      return {
        ...state,
        list: action.payload
      };

    case PeopleListActions.SHOW_CHARACTERS_FAIL:
      return {
        ...state
      };

    case PeopleListActions.LOAD_PERSON_DETAILS:
      return {
        ...state,
        details: {...state.details, url: action.payload.url}
      };

    case PeopleListActions.LOAD_PERSON_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          ...action.payload
        }
      };

    case PeopleListActions.LOAD_PERSON_DETAILS_FAIL:
      return {
        ...state
      };

    case PeopleListActions.LOAD_PERSON_DETAILS_CLEAR:
      return {
        ...state,
        details: {}
      };

    default:
      return state;
  }

}
