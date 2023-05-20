"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
var direccion = /** @class */ (function () {
    function direccion(calle, numero, piso, letra, cp, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = cp;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Object.defineProperty(direccion.prototype, "calle", {
        get: function () {
            return this.calle;
        },
        set: function (calle) {
            this._calle = calle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "numero", {
        get: function () {
            return this.numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "piso", {
        get: function () {
            return this.piso;
        },
        set: function (piso) {
            this._piso = piso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "letra", {
        get: function () {
            return this.letra;
        },
        set: function (letra) {
            this._letra = letra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "codigoPostal", {
        get: function () {
            return this.codigoPostal;
        },
        set: function (codigoPostal) {
            this._codigoPostal = codigoPostal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "poblacion", {
        get: function () {
            return this.poblacion;
        },
        set: function (poblacion) {
            this._poblacion = poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "provincia", {
        get: function () {
            return this.provincia;
        },
        set: function (provincia) {
            this._provincia = provincia;
        },
        enumerable: false,
        configurable: true
    });
    return direccion;
}());
exports.direccion = direccion;
