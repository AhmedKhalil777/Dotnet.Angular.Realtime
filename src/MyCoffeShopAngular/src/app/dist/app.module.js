"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var ajaxrequesting_component_1 = require("./ajaxrequesting/ajaxrequesting.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var animations_1 = require("@angular/platform-browser/animations");
var polling_request_component_1 = require("./polling-request/polling-request.component");
var long_polling_request_component_1 = require("./long-polling-request/long-polling-request.component");
var server_sent_event_component_1 = require("./server-sent-event/server-sent-event.component");
var web_sockets_component_1 = require("./web-sockets/web-sockets.component");
var signal_r_component_1 = require("./signal-r/signal-r.component");
var forms_1 = require("@angular/forms");
var material_module_1 = require("./shared/material.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                ajaxrequesting_component_1.AJAXRequestingComponent,
                nav_bar_component_1.NavBarComponent,
                polling_request_component_1.PollingRequestComponent,
                long_polling_request_component_1.LongPollingRequestComponent,
                server_sent_event_component_1.ServerSentEventComponent,
                web_sockets_component_1.WebSocketsComponent,
                signal_r_component_1.SignalRComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
