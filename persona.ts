import { direccion } from "./direccion";
import { mail } from "./mail";
import { telefono } from "./telefono";

export class Persona {
   private _nombre: string;
   private _apellidos: string;
   private _edad: number;
   private _dni: string;
   private _cumpleaños: Date;
   private _color_favorito: string;
   private _sexo: string;
   private _direcciones: direccion;
   private _mail: mail;
   private _telefonos: telefono;
   private _notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumple: Date, color: string, sexo: string, direcciones: direccion, mail: mail, telefono: telefono, notas: string,  ) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumple;
        this._color_favorito = color;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mail = mail;
        this._telefonos = telefono;
        this._notas = notas;
    }

    public get nombre(): string{
        return this._nombre;
    }

    public get apellidos(): string {
        return this._apellidos;
    }

    public get edad(): number {
        return this._edad;
    }

    public get dni(): string {
        return this._dni;
    }

    public get cumpleaños(): Date {
        return this._cumpleaños;
    }

    public get color_favorito(): string {
        return this._color_favorito;
    }

    public get sexo(): string {
        return this._sexo;
    }

    public get direccion(): direccion{
        return this._direcciones;
    }

    public get mail(): mail{
        return this._mail;
    }

    public get telefonos(): telefono {
        return this._telefonos
    }

    public get notas(): string {
        return this._notas;
    }

    public set nombre(nombre: string){
        this._nombre = nombre;
    }

    public set apellidos(apellidos: string){
        this._apellidos = apellidos;
    }

    public set edad(edad: number){
        this._edad = edad;
    }

    public set dni(dni: string){
        this._dni = dni;
    }

    public set cumpleaños(cumpleaños: Date){
        this._cumpleaños = cumpleaños;
    }

    public set color_favorito(color_favorito: string){
        this._color_favorito = color_favorito;
    }

    public set sexo(sexo: string){
        this._sexo = sexo;
    }

    public set direcciones(direcciones: direccion){
        this._direcciones = direcciones;
    }

    public set mail(mail: mail){
        this._mail = mail;
    }

    public set telefonos(telefonos: telefono){
        this._telefonos = telefonos;
    }

    public set notas(notas: string){
        this._notas = notas;
    }
}



