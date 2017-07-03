import { NgxBulmaModule } from './../lib/ngx-bulma.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxBulmaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
