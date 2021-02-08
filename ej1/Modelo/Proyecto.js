var Proyecto = /** @class */ (function () {
    function Proyecto(titulo) {
        this._titulo = titulo;
    }
    Object.defineProperty(Proyecto.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    return Proyecto;
}());
