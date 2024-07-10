import { Cliente } from "./Cliente";
import { Projeto } from "./Projeto";


export class Feedback {
    private _cliente: Cliente
    private _projeto: Projeto 
    private _comentario: string
    private _nota: number | null

    constructor(cliente: Cliente, projeto: Projeto, comentario: string, nota: number) {
        this._cliente = cliente
        this._projeto = projeto
        this._comentario = comentario
        if(nota > 10 || nota < 0) {
            this._nota = null
        }
        else {
            this._nota = nota
        }
    }
    
    getComentario() {
        return this._comentario
    }

    setComentario(value: string) {
        this._comentario = value
    }
    getNota() {
        return this._nota
    }

    setNota(value: number) {
        this._nota = value
    }



    
}