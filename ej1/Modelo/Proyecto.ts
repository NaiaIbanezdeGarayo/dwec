class Proyecto{
    private _titulo:string;

    constructor(titulo:string){
        this._titulo = titulo;
    }

    get titulo(): string {
        return this._titulo;
    }

    set titulo(value: string) {
        this._titulo = value;
    }
}