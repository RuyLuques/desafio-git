// Método é uma função que trabalho no contexto d euma classe
class formaDeBolo {
    constructor(saborDaMassa, saborRecheio){ // ele é uma função
        this.saborDaMassa = saborDaMassa 
        this.saborRecheio = saborRecheio
    } 

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa}
            com recheio de ${this.saborRecheio}`)
    } // não preciso usar function
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
//console.log(boloFesta.saborRecheio)
let boloPremium = new formaDeBolo("morango", "baunilha")

boloFesta.escrever()
