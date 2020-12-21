"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AJAXRequestingComponent = void 0;
var core_1 = require("@angular/core");
var AJAXRequestingComponent = /** @class */ (function () {
    function AJAXRequestingComponent() {
        this.userName = "Ahmed";
        this.product = 'Hello';
    }
    AJAXRequestingComponent.prototype.ngOnInit = function () {
    };
    AJAXRequestingComponent.prototype.changeCoffee = function () {
        var _this = this;
        fetch("https://localhost:5001/Ajax", {
            method: 'POST',
            body: JSON.stringify({ product: this.product, size: this.size }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json().then().then(function (res) { _this.status = res.message; });
        });
    };
    AJAXRequestingComponent = __decorate([
        core_1.Component({
            selector: 'app-ajaxrequesting',
            templateUrl: './ajaxrequesting.component.html',
            styleUrls: ['./ajaxrequesting.component.scss']
        })
    ], AJAXRequestingComponent);
    return AJAXRequestingComponent;
}());
exports.AJAXRequestingComponent = AJAXRequestingComponent;
