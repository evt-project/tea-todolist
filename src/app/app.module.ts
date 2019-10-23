<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
=======
>>>>>>> visualise a todo list
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddItemComponent } from './add-item/add-item.component';
import { AppComponent } from './app.component';
import { ItemsComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AddItemComponent,
    ViewItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
=======
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
>>>>>>> visualise a todo list
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
