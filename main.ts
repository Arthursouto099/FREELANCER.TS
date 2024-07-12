import {Pessoa} from './Pessoa'
import {Freelancer} from "./Freelancer"
import  {Projeto} from "./Projeto"
import {Avaliacao} from "./Avaliacao"
import { Cliente } from './Cliente'
import { Feedback } from './Feedback'





const c1 = new Cliente('arthur', 'tavares@gmail.com')

const f1 = new Freelancer('BRUNO', 'BRUNOR@GMAIL', 'FRONTEND')
const p2 = new Projeto('BANCO ITAU', 'Banco bom demais', f1, c1 )


const fe = new Feedback(c1, p2, 'muitooooo ruim', 5)

const v1 = new Avaliacao(f1, p2, 10, null)


p2.atribuirFreelancer(f1)
f1.mostrarProjetos()

p2.concluirProjeto(true)
v1.adicionarFeedback(fe)

v1.avaliar()





