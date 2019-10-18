class Paciente{
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
    }

    get nome(){
        return this._nome;
    }

    get idade(){
        return this._idade;
    }
}

export{Paciente}