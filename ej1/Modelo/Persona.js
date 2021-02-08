var Persona = /** @class */ (function () {
    function Persona(usuario, pass) {
        this._listaProyectos = [];
        this._usuario = usuario;
        this._pass = pass;
    }
    Object.defineProperty(Persona.prototype, "usuario", {
        get: function () {
            return this._usuario;
        },
        set: function (value) {
            this._usuario = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "pass", {
        get: function () {
            return this._pass;
        },
        set: function (value) {
            this._pass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "listaProyectos", {
        get: function () {
            return this._listaProyectos;
        },
        set: function (value) {
            this._listaProyectos = value;
        },
        enumerable: true,
        configurable: true
    });
    return Persona;
}());
