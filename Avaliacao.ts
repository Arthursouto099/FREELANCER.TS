import {IAvaliavel} from "./IAvalivel"
import {Freelancer} from "./Freelancer"
import {Projeto} from "./Projeto"
import { Feedback } from "./Feedback"



 export class Avaliacao implements IAvaliavel {
    private _freelancer: Freelancer
    private _projeto: Projeto 
    private _nota: number | null
    private _feedback:  Feedback | null

    constructor(freelancer: Freelancer, projeto: Projeto, nota: number, feedback: Feedback | null) {
        this._freelancer = freelancer
        this._projeto = projeto
        if(nota > 10 || nota < 0) {
            this._nota = null
        }
        else {
            this._nota = nota
        }
        this._feedback = feedback
    }


    
    getNota() {
        return this._nota
    }
     
    setNota(value: number) {
        this._nota = value
    }





    avaliar(): void {
        if(this._projeto.getConcluido() == false) {
            console.log('O projeto não está pronto para receber um feedback')
        }else {
            console.log(`A nota do Freelancer ${this._freelancer.getNome()}, cujo o projeto foi ${this._projeto.getTitulo()} foi de ${this.getNota()} pontos`)
            
            if(this._feedback != null) {
                console.log(`Feedback do cliente: ${this._feedback.getComentario()}, nota do cliente: ${this._feedback.getNota()}`)
            }

            
        }
     
      
        
        
    }

    adicionarFeedback(valor: Feedback) {
        if(this._projeto.getConcluido() == false) {
            console.log('O projeto não está pronto para receber um feedback')
        }
        else {
            this._feedback = valor
        }
        
    }






     
    
}