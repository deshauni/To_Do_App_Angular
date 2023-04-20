import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoListComponent } from './to-do-list/to-do-list.component';




@NgModule({
  imports:      [
    BrowserModule,
    NgbModule.forRoot(),
    ],
  declarations: [
    AppComponent,
    ToDoListComponent,
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
    ]
})

export class AppModule { }
