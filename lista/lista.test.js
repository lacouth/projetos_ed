import {No} from '../no/no'
import {Lista} from '../lista/lista'
import {Paciente} from '../paciente/paciente'

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
        l.adicionar(new No(1));
        l.adicionar(new No(2));
        l.adicionar(new No(3));

        l.inserir(new No(4),2);
        expect(l.obterListaCompleta()).toStrictEqual([0,1,4,2,3]);

    })

    test('Remover elemento no meio da lista',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1));
        l.adicionar(new No(2));
        l.adicionar(new No(3));

        l.remover(2);
        expect(l.obterListaCompleta()).toStrictEqual([0,1,3]);
        expect(l.tamanho).toBe(3);
    })

    test('Remover elemento no meio da lista',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1));
        l.adicionar(new No(2));
        l.adicionar(new No(3));

        l.remover(1);
        expect(l.obterListaCompleta()).toStrictEqual([0,2,3]);
        expect(l.tamanho).toBe(3);
    })

    test('Remover elemento no início da lista',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1));
        l.adicionar(new No(2));
        l.adicionar(new No(3));

        l.remover(0);
        expect(l.obterListaCompleta()).toStrictEqual([1,2,3])
        expect(l.tamanho).toBe(3)
    })

    test('Remover elemento no final da lista',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1));
        l.adicionar(new No(2));
        l.adicionar(new No(3));

        l.remover(3);
        expect(l.obterListaCompleta()).toStrictEqual([0,1,2])
        expect(l.tamanho).toBe(3)
    })

    test('Remover índice inválido',()=>{
        let l = new Lista(new No(0));
        l.adicionar(new No(1));
        l.adicionar(new No(2));
        l.adicionar(new No(3));

        l.remover(8);
        expect(l.obterListaCompleta()).toStrictEqual([0,1,2,3])
        expect(l.tamanho).toBe(4)
    })

    test('Ordenaçao da lista pela força bruta',()=>{
        let l = new Lista(new No(5));
        l.adicionar(new No(4));
        l.adicionar(new No(3));
        l.adicionar(new No(2));
        l.adicionar(new No(1));
        l.ordenar((a,b)=>a<b,true);
        expect(l.obterListaCompleta()).toStrictEqual([1,2,3,4,5]);
    })

    test('Ordenaçao da lista pelo bubblesort',()=>{
        let l = new Lista(new No(5));
        l.adicionar(new No(4));
        l.adicionar(new No(3));
        l.adicionar(new No(2));
        l.adicionar(new No(1));
        l.ordenar((a,b)=>a<b);
        expect(l.obterListaCompleta()).toStrictEqual([1,2,3,4,5]);
    })

    test('Ordenação da lista de pacientes por nome',()=>{
        let l = new Lista;
        let p1 = new Paciente('z',4);
        let p2 = new Paciente('y',3);
        let p3 = new Paciente('x',2);
        let p4 = new Paciente('w',1);

        l.adicionar(new No(p1));
        l.adicionar(new No(p2));
        l.adicionar(new No(p3));
        l.adicionar(new No(p4));

        l.ordenar((a,b)=>a.nome<b.nome, true);

        expect(l.obterListaCompleta()).toStrictEqual([p4,p3,p2,p1])

    })

    test('Ordenação da lista de pacientes por nome usando bubblesort',()=>{
        let l = new Lista;
        let p1 = new Paciente('z',4);
        let p2 = new Paciente('y',3);
        let p3 = new Paciente('x',2);
        let p4 = new Paciente('w',1);

        l.adicionar(new No(p1));
        l.adicionar(new No(p2));
        l.adicionar(new No(p3));
        l.adicionar(new No(p4));

        l.ordenar((a,b)=>a.nome<b.nome);

        expect(l.obterListaCompleta()).toStrictEqual([p4,p3,p2,p1])

    })

    test('Ordenação da lista de pacientes por idade',()=>{
        let l = new Lista;
        let p1 = new Paciente('z',4);
        let p2 = new Paciente('y',3);
        let p3 = new Paciente('x',2);
        let p4 = new Paciente('w',1);

        l.adicionar(new No(p1));
        l.adicionar(new No(p2));
        l.adicionar(new No(p3));
        l.adicionar(new No(p4));

        l.ordenar((a,b)=>a.idade<b.idade, true);

        expect(l.obterListaCompleta()).toStrictEqual([p4,p3,p2,p1])

    })
    test('Ordenação da lista de pacientes por idade usando bubblesort',()=>{
        let l = new Lista;
        let p1 = new Paciente('z',4);
        let p2 = new Paciente('y',3);
        let p3 = new Paciente('x',2);
        let p4 = new Paciente('w',1);

        l.adicionar(new No(p1));
        l.adicionar(new No(p2));
        l.adicionar(new No(p3));
        l.adicionar(new No(p4));

        l.ordenar((a,b)=>a.idade<b.idade, true);

        expect(l.obterListaCompleta()).toStrictEqual([p4,p3,p2,p1])

    })
    test('Ordenação da lista de pacientes por hora',()=>{
        let l = new Lista;
        let p1 = new Paciente('z',4);
        let p2 = new Paciente('y',3);
        let p3 = new Paciente('x',2);
        let p4 = new Paciente('w',1);

        l.adicionar(new No(p1));
        l.adicionar(new No(p2));
        l.adicionar(new No(p3));
        l.adicionar(new No(p4));

        l.ordenar((a,b)=>a.hora<b.hora, true);

        expect(l.obterListaCompleta()).toStrictEqual([p1,p2,p3,p4])

    })
    test('Ordenação da lista de pacientes por hora usando o bubblesort',()=>{
        let l = new Lista;
        let p1 = new Paciente('z',4);
        let p2 = new Paciente('y',3);
        let p3 = new Paciente('x',2);
        let p4 = new Paciente('w',1);

        l.adicionar(new No(p1));
        l.adicionar(new No(p2));
        l.adicionar(new No(p3));
        l.adicionar(new No(p4));

        l.ordenar((a,b)=>a.hora<b.hora, true);

        expect(l.obterListaCompleta()).toStrictEqual([p1,p2,p3,p4])

    })

})