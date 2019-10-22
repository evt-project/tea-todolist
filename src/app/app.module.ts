import { FormsModule } from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';
import { AppComponent } from './app.component';
import { AddNewTodoListComponent } from './add-new-todo-list/add-new-todo-list.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    AddNewTodoListComponent,
    ViewItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
