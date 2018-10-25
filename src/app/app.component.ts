import { Component, OnInit } from '@angular/core';
import { AppState } from './app.reducers';
import { Store, State } from '@ngrx/store';
import { ShowCharacters } from './people-list.actions';
import { Observable } from 'rxjs';
import { People } from './people';
import { map } from 'rxjs/operators';
import { PeopleListState } from './people-list.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task-new';

  list$: Observable<People[]>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(new ShowCharacters());

    this.list$ = this.store.select('peopleList').pipe(map((state: PeopleListState) => state && state.list));
  }
}
