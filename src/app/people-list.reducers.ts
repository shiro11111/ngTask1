import { Action} from '@ngrx/store';
import { People } from './people';
import * as PeopleListActions from './people-list.actions';

export interface PeopleListState {
  list: People[];
}

const initialState: PeopleListState = {
  list: []
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
    default:
    return state;
  }

}
