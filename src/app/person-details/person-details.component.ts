import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../app.reducers';
import {Observable} from 'rxjs';
import {People} from '../people';
import {map} from 'rxjs/operators';
import {PeopleListState} from '../people-list/people-list.reducers';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  personDetails$: Observable<People>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.personDetails$ = this.store.pipe(
      select('peopleList'),
      map((state: PeopleListState) => state && state.details));

  }

}
