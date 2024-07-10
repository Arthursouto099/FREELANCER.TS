import {Pessoa} from './Pessoa'
import {Freelancer} from "./Freelancer"
import  {Projeto} from "./Projeto"
import {Avaliacao} from "./Avaliacao"



const p1 = new Projeto('CALCULADORA', 'calculadoraaa pika', null)




const f1 = new Freelancer('BRUNO', 'BRUNOR@GMAIL', 'FRONTEND')
const p2 = new Projeto('BANCO ITAU', 'Banco bom demais', f1)

p2.desatribuirFreelancer(f1)
p2.atribuirFreelancer(f1)


p1.atribuirFreelancer(f1)

f1.adicionarProjeto(p1)
f1.adicionarProjeto(p2)




f1.removerProjeto(p1)
f1.mostrarProjetos();




const a1 = new Avaliacao(f1, p2, 10)
a1.avaliar()
