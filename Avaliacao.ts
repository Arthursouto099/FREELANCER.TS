import {IAvaliavel} from "./IAvalivel"
import {Freelancer} from "./Freelancer"
import {Projeto} from "./Projeto"



 export class Avaliacao implements IAvaliavel {
    private _freelancer: Freelancer
    private _projeto: Projeto 
    private _nota: number

    constructor(freelancer: Freelancer, projeto: Projeto, nota: number) {
        this._freelancer = freelancer
        this._projeto = projeto
        this._nota = nota
    }







    avaliar(): void {
        console.log(`a nota do projeto foi ${this._nota}, projeto top demais bicho! `)
        
    }


     
    
}