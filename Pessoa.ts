export abstract class Pessoa {
    private  _nome: string
    private _email: string

    constructor(nome: string, email: string ) {
        this._nome = nome
        this._email = email
    }

    getNome(): string {
        return this._nome
    }

    setNome(value: string) {
        this._nome = value
    }
    
    getEmail(): string {
        return this._email
    }

    setEmail(value: string) {
        this._email = value
    }
    
    abstract obterTipo(): string


}