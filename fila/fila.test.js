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
    });
    test('Criar fila com 2 nós',()=>{
        let p = new Paciente('Fulano',33);
        let n = new No(p);

        let f = new Fila(n);

        let p2 = new Paciente('sicrano',22);

        f.adicionar(new No(p2));
        expect(f.ultimo()).toBe(p2);
        expect(f.tamanho).toBe(2);

    });

    test('Testa a busca por indice', ()=>{
        let f = Fila(new No(1));
        f.adicionar(new No(2));
        f.adicionar(new No(3));

        expect(f.elemento(0)).toBe(1);
        expect(f.elemento(1)).toBe(2);
        expect(f.elemento(2)).toBe(3);
    })
});