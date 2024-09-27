class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou uma arma desconhecida';
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const hero1 = new Hero('Ana', 25, 'mago');
const hero2 = new Hero('Teodoro', 30, 'guerreiro');
const hero3 = new Hero('Josivalda', 28, 'monge');
const hero4 = new Hero('Vandelma', 22, 'ninja');

hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();
