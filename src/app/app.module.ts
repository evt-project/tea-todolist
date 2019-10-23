import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddItemComponent } from './add-item/add-item.component';
import { AppComponent } from './app.component';
import { ViewItemComponent } from './view-item/view-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
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
