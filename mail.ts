
    export class mail{
        private _tipo: string;
        private _direccion: string;


        constructor(tipo: string, direccion: string) {
            this._tipo = tipo;
            this._direccion = direccion;
        }


        public get tipo(): string{
            return this.tipo;
        }

        public get direccion(): string{
            return this.direccion;
        }

        public set tipo(tipo: string){
            this._tipo = tipo;
        }

        public set direccion(direccion: string){
            this._direccion = direccion;
        }
    }


