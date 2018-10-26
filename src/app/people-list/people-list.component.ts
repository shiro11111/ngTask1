import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {People} from '../people';
import {LoadPersonDetails, LoadPersonDetailsClear, ShowCharacters} from './people-list.actions';
import {select, Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {PeopleListState} from './people-list.reducers';
import {AppState} from '../app.reducers';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  list$: Observable<People[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.dispatch(new ShowCharacters());

    this.list$ = this.store.pipe(
      select('peopleList'),
      map((state: PeopleListState) => state && state.list));
  }

  onPersonClicked(url: string): void {
    this.store.dispatch(new LoadPersonDetailsClear());
    this.store.dispatch(new LoadPersonDetails({ url: url }));
  }

}
