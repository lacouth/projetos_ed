import {Paciente} from './paciente'

describe('Testes da classe Paciente', () => {
    test('Criar objeto', () => {
        let p = new Paciente();
        expect(p instanceof Paciente).toBe(true);
    });

    test('Construtor com atributos', () => {
        let n = "Fulano";
        let i = 30;
        let p = new Paciente(n,i);
        expect(p.nome).toBe(n);
        expect(p.idade).toBe(i);
    });
});