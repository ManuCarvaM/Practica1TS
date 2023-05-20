
export class direccion{
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _codigoPostal: number;
    private _poblacion: string;
    private _provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, cp: number, poblacion: string, provincia: string,) {
       this._calle = calle;
       this._numero = numero;
       this._piso = piso;
       this._letra = letra;
       this._codigoPostal = cp;
       this._poblacion = poblacion;
       this._provincia = provincia;

    }

    public get calle(): string{
        return this.calle;
    }

    public get  numero(): number{
        return this.numero;
    }

    public get piso(): number{
        return this.piso;
    }

    public get letra(): string{
        return this.letra;
    }

    public get codigoPostal(): number{
        return this.codigoPostal;
    }

    public get poblacion(): string{
        return this.poblacion;
    }

    public get provincia(): string{
        return this.provincia;
    }

    public set calle(calle: string){
        this._calle = calle;

    }

    public set numero(numero: number){
        this._numero = numero;
    }

    public set piso(piso: number){
        this._piso = piso;
    }

    public set letra(letra: string){
        this._letra = letra;
    }

    public set codigoPostal(codigoPostal: number){
        this._codigoPostal = codigoPostal;
    }

    public set poblacion(poblacion: string){
        this._poblacion = poblacion;
    }

    public set provincia(provincia: string){
        this._provincia = provincia;
    }
}


