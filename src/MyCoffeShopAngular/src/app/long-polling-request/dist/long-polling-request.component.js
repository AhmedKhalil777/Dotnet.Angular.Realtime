"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LongPollingRequestComponent = void 0;
var core_1 = require("@angular/core");
var LongPollingRequestComponent = /** @class */ (function () {
    function LongPollingRequestComponent() {
        var _this = this;
        this.userName = "Ahmed";
        this.product = 'Hello';
        this.poll = function () {
            fetch("https://localhost:5001/Polling", {
                method: "Post",
                body: JSON.stringify({ product: _this.product, size: _this.size }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    response.json().then(function (res) {
                        _this.status = res.message;
                        console.log(res.message);
                    });
                }
            });
        };
    }
    LongPollingRequestComponent.prototype.ngOnInit = function () {
        this.intervalId = setInterval(this.poll, 1000);
    };
    LongPollingRequestComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        clearInterval(this.intervalId);
    };
    LongPollingRequestComponent = __decorate([
        core_1.Component({
            selector: 'app-long-polling-request',
            templateUrl: './long-polling-request.component.html',
            styleUrls: ['./long-polling-request.component.scss']
        })
    ], LongPollingRequestComponent);
    return LongPollingRequestComponent;
}());
exports.LongPollingRequestComponent = LongPollingRequestComponent;
