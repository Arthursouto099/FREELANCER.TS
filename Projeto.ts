import {Freelancer} from "./Freelancer"

export class Projeto {
    private _titulo: string
    private _descricao: string
    private _freelancer : Freelancer | null

    constructor(titulo: string, descricao: string, freelancer: Freelancer| null) {
        this._titulo = titulo
        this._descricao = descricao
        this._freelancer = freelancer 
    }

    getTitulo(): string {
        return this._titulo
    }

    setTitulo(value: string) {
        this._titulo = value
    }
    
    getDescricao(): string {
        return this._descricao
    }

    setDescricao(value: string) {
        this._descricao = value
    }

    getFreelancer() {
        return this._freelancer
    }

    setFreelancer(value: Freelancer) {
        this._freelancer = value
    }

    atribuirFreelancer(valor: Freelancer) {
        this._freelancer = valor
    }
    desatribuirFreelancer(valor: Freelancer) {
       this._freelancer = null
    }

}

