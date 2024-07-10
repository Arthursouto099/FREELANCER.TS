import {Pessoa} from './Pessoa'
import  {Projeto} from "./Projeto"

export class Freelancer extends Pessoa {
    private _areaDeEspecializacao: string
    private _projetos: Projeto[]

    constructor(nome: string, email: string,areaDeEspecializacao: string ) {
        super(nome, email)
        this._areaDeEspecializacao = areaDeEspecializacao
        this._projetos = []
    }

    obterTipo(): string {
        return 'Freelancer'
    }

    adicionarProjeto(valor: Projeto): void {
        this._projetos.push(valor)
        
    }

    removerProjeto(nomeDoProjeto: Projeto): void {
        /*this.getProjetos().forEach(p => p.getTitulo() == nomeDoProjeto ? )
        
        */

        let index = this._projetos.indexOf(nomeDoProjeto)
        this._projetos.splice(index, 1)

         
    }

    /*getProjeto(): void
    {
         console.log(this._projetos[0].getTitulo())  
    }

    */

/*     getProjeto(): string {
       for(let i = 0; i <= this._projetos.length; i++) {
        console.log(this._projetos[i].getTitulo())
       }
    } */

    getProjetos(): Projeto[] {
        return this._projetos;
    }

    mostrarProjetos(): void {
        this.getProjetos().forEach(p => console.log(`PROJETO: ${p.getTitulo()}, DESCRIÇÃO: ${p.getDescricao()}`));
    }

}



