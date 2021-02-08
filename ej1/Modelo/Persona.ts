class Persona{
    private _usuario:string;
    private _pass:string;
    private _color:string;
    private _listaProyectos:Array<Proyecto> = [];

    constructor(usuario:string, pass:string){
        this._usuario = usuario;
        this._pass = pass;
    }

    get usuario(): string {
        return this._usuario;
    }

    set usuario(value: string) {
        this._usuario = value;
    }

    get pass(): string {
        return this._pass;
    }

    set pass(value: string) {
        this._pass = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get listaProyectos(): Array<Proyecto> {
        return this._listaProyectos;
    }

    set listaProyectos(value: Array<Proyecto>) {
        this._listaProyectos = value;
    }
}