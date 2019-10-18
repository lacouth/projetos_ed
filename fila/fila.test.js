import {Paciente} from '../paciente/paciente'
import {No} from '../no/no'
import {Fila} from '../fila/fila'

describe('Testes da Fila', () => {
    test('Criar fila vazia', () => {
        let f = new Fila;
        expect(f instanceof Fila).toBe(true);
        expect(f.tamanho).toBe(0);
        expect(f.vazio()).toBe(true);
    });
    test('Criar fila com 1 nó',()=>{
        let p = new Paciente('Fulano',33);
        let n = new No(p);
        let f = new Fila(n);
        expect(f.tamanho).toBe(1);
        expect(f.mostrarElemento()).toBe(p);
        expect(f.vazio()).toBe(false);
    })
});