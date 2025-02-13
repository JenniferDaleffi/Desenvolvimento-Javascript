class Pessoa {
    _nome = '' // PRIVATE
    constructor(){
        this.nome = ''
        this.cpf = ''
        this.email = ''
    }

    get nome () {
        return this._nome
    }

    set nome (nome){
        this._nome = nome
    }
}

const pessoa1 = new Pessoa("Anderson")
pessoa1.nome = "Anderson"

console.log(pessoa1.nome) // Anderson