// Criação de função
function Animal (nome) {
    this.nome = nome;
}

Animal.prototype.falar = function() {
    console.log(this.nome + 'emite um som.');
}

// Construtor derivado
function Cachorro(nome, raca) {
    Animal.call(this, nome);
    this.raca = this.raca;
}
// Herança (prototype instancia objetos)
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor =  Cachorro;

// Criar método
Cachorro.prototype.latir = function() {
    console.log('${this.nome} (um ${this.raca}) está latindo')

}

const rex = new Cachorro ('Rex', "Pastor Alemão");
rex.latir();
rex.falar();
