import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceXRoutingModule } from './space-x-routing.module';
import { AJAXRequestingComponent } from '../ajaxrequesting/ajaxrequesting.component';
import { PollingRequestComponent } from '../polling-request/polling-request.component';
import { SignalRComponent } from '../signal-r/signal-r.component';
import { LongPollingRequestComponent } from '../long-polling-request/long-polling-request.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ServerSentEventComponent } from '../server-sent-event/server-sent-event.component';
import { WebSocketsComponent } from '../web-sockets/web-sockets.component';
import { SpaceXComponent } from './space-x/space-x.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AJAXRequestingComponent,
    NavBarComponent,
    PollingRequestComponent,
    LongPollingRequestComponent,
    ServerSentEventComponent,
    WebSocketsComponent,
    SignalRComponent,
    SpaceXComponent
  ],
  imports: [
    CommonModule,
    SpaceXRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class SpaceXModule { }
