import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AJAXRequestingComponent } from './ajaxrequesting/ajaxrequesting.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollingRequestComponent } from './polling-request/polling-request.component';
import { LongPollingRequestComponent } from './long-polling-request/long-polling-request.component';
import { ServerSentEventComponent } from './server-sent-event/server-sent-event.component';
import { WebSocketsComponent } from './web-sockets/web-sockets.component';
import { SignalRComponent } from './signal-r/signal-r.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AJAXRequestingComponent,
    NavBarComponent,
    PollingRequestComponent,
    LongPollingRequestComponent,
    ServerSentEventComponent,
    WebSocketsComponent,
    SignalRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
