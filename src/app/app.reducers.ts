import * as fromPeopleList from './people-list/people-list.reducers';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
  peopleList: fromPeopleList.PeopleListState;
}


export const reducers: ActionReducerMap<AppState> = {
  peopleList: fromPeopleList.peopleListReducer
};
