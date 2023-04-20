import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './todolist/todolist.component';




@NgModule({
  imports:      [
    BrowserModule,
    NgbModule.forRoot(),
    ],
  declarations: [
    AppComponent,
    TodolistComponent,
  ],
  bootstrap: [
    AppComponent
    ]
})

export class AppModule { }
