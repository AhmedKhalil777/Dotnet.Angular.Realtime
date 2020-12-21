"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ajaxrequesting_component_1 = require("./ajaxrequesting/ajaxrequesting.component");
var long_polling_request_component_1 = require("./long-polling-request/long-polling-request.component");
var polling_request_component_1 = require("./polling-request/polling-request.component");
var server_sent_event_component_1 = require("./server-sent-event/server-sent-event.component");
var signal_r_component_1 = require("./signal-r/signal-r.component");
var web_sockets_component_1 = require("./web-sockets/web-sockets.component");
var routes = [
    { path: '', component: ajaxrequesting_component_1.AJAXRequestingComponent },
    { path: 'ajax', component: ajaxrequesting_component_1.AJAXRequestingComponent },
    { path: 'polling', component: polling_request_component_1.PollingRequestComponent },
    { path: 'longPolling', component: long_polling_request_component_1.LongPollingRequestComponent },
    { path: 'SSE', component: server_sent_event_component_1.ServerSentEventComponent },
    { path: 'ws', component: web_sockets_component_1.WebSocketsComponent },
    { path: 'signalR', component: signal_r_component_1.SignalRComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
