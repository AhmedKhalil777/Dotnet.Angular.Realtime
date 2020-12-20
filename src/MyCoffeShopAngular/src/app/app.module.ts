import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AJAXRequestingComponent } from './ajaxrequesting/ajaxrequesting.component';

@NgModule({
  declarations: [
    AppComponent,
    AJAXRequestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
