import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'help', component: HelpPanelComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
