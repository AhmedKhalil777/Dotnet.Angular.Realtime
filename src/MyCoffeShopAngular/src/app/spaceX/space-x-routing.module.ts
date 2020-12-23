import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AJAXRequestingComponent } from '../ajaxrequesting/ajaxrequesting.component';
import { LongPollingRequestComponent } from '../long-polling-request/long-polling-request.component';
import { PollingRequestComponent } from '../polling-request/polling-request.component';
import { ServerSentEventComponent } from '../server-sent-event/server-sent-event.component';
import { SignalRComponent } from '../signal-r/signal-r.component';
import { WebSocketsComponent } from '../web-sockets/web-sockets.component';
import { SpaceXComponent } from './space-x/space-x.component';

const routes: Routes = [
  { path: '', component: SpaceXComponent },
  { path: 'ajax', component: AJAXRequestingComponent },
  {path:'polling', component:PollingRequestComponent },
  { path: 'longPolling', component: LongPollingRequestComponent },
  { path: 'SSE', component: ServerSentEventComponent },
  { path: 'ws', component: WebSocketsComponent },
  { path: 'signalR', component: SignalRComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceXRoutingModule { }
