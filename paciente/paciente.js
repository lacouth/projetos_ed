class Paciente{
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
        this._hora = new Date().toTimeString().slice(0,8);
    }

    get nome(){
        return this._nome;
    }

    get idade(){
        return this._idade;
    }

    get hora(){
        return this._hora;
    }
}

export{Paciente}