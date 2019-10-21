import {No} from '../no/no'
import {Lista} from '../lista/lista'

describe("Testes da Lista",()=>{
    
    test('Criar lista vazia',()=>{
        let l = new Lista;
        expect(l instanceof Lista).toBe(true);
        expect(l.tamanho).toBe(0);
        expect(l.vazio()).toBe(true);
    });

    test('Criar lista com um nó',()=>{
        let l = new Lista(new No(0))
        expect(l.tamanho).toBe(1);
        expect(l.vazio()).toBe(false);
        expect(l.elemento(0)).toBe(0);
    })

    test('Adicionar nó em uma lista vazia',()=>{
        let l = new Lista;
        l.adicionar(new No(0))
        l.adicionar(new No(1))

        expect(l.elemento(0)).toBe(0)
        expect(l.elemento(1)).toBe(1)
    })

    test('Inserir nó no meio da lista',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1))
        l.adicionar(new No(2));
        l.adicionar(new No(3))

        l.inserir(new No(4), 2);
        expect(l.elemento(2)).toBe(4);
    })

    test('Inserir nó no inicio da lista',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1))
        l.adicionar(new No(2));
        l.adicionar(new No(3))

        l.inserir(new No(4), 0);
        expect(l.elemento(0)).toBe(4);
    })

    test('Inserir nó no final da lista',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1))
        l.adicionar(new No(2));
        l.adicionar(new No(3))

        l.inserir(new No(4), 4);
        expect(l.elemento(4)).toBe(4);
    })

    test('Obter lista completa',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1))
        l.adicionar(new No(2));
        l.adicionar(new No(3))

        expect(l.obterListaCompleta()).toStrictEqual([0,1,2,3]);
    })

    test('Obter lista completa depois de uma inserção',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1))
        l.adicionar(new No(2));
        l.adicionar(new No(3))

        l.inserir(new No(4),2);
        expect(l.obterListaCompleta()).toStrictEqual([0,1,4,2,3])

    })
})