import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListService } from './people-list.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PeopleListEffects } from './people-list.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [BrowserAnimationsModule],
    [MatButtonModule, MatCheckboxModule],
    MatCardModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      PeopleListEffects
    ]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [PeopleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
