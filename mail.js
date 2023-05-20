"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
var mail = /** @class */ (function () {
    function mail(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Object.defineProperty(mail.prototype, "tipo", {
        get: function () {
            return this.tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mail.prototype, "direccion", {
        get: function () {
            return this.direccion;
        },
        set: function (direccion) {
            this._direccion = direccion;
        },
        enumerable: false,
        configurable: true
    });
    return mail;
}());
exports.mail = mail;
