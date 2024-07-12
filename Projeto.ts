import { Freelancer } from "./Freelancer"
import { Cliente } from "./Cliente"

export class Projeto {
    private _titulo: string
    private _descricao: string
    private _freelancer: Freelancer | null
    private _cliente: Cliente
    private _concluido: boolean

    constructor(titulo: string, descricao: string, freelancer: Freelancer | null, cliente: Cliente) {
        this._titulo = titulo
        this._descricao = descricao
        this._freelancer = freelancer
        this._cliente = cliente
        this._concluido = false
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

    setDescricao(value: string):  void{
        this._descricao = value
    }

    getFreelancer()  {
        return this._freelancer
    }

    setFreelancer(value: Freelancer) {
        this._freelancer = value
    }

    getCliente() {
        return this._cliente
    }

    setCliente(value: Cliente) {
        this._cliente = value
    }

    getConcluido() {
        return this._concluido
    }


    setConcluido(value: boolean): void {
        this._concluido = value
    }

    concluirProjeto(concluir: boolean): void {
        this._concluido = concluir
        console.log('O projeto foi concluido com sucesso')
    }

    isConcluido(): void {
        if (this._concluido == false) {
            console.log('O projeto está em andamento')
        }
        else {
            console.log('O projeto está concluido')
        }
    }

    atribuirFreelancer(valor: Freelancer) {
        this._freelancer = valor
        valor.adicionarProjeto(this)
    }


    desatribuirFreelancer() {
        this._freelancer?.removerProjeto(this)
        this._freelancer = null
    }

}

