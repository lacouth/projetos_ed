import {Arvore} from '../tree/arvore/arvore'
import {No} from '../tree/no/no'

describe('Testa inserção na arvore', () => {
    test('insere nó raiz', () => {

        const raiz = new No(0)
        const arvore = new Arvore(raiz)
        expect(arvore.quantidade).toBe(1)
        
    });
    test('insere a raiz mais dois nós e retorna em ordem',()=>{
        const values = [3,2,1]
        const arvore = new Arvore(new No(values[0]))
        arvore.inserir(new No(values[1]))
        arvore.inserir(new No(values[2]))
        expect(arvore.quantidade).toBe(3)
        expect(arvore.listaDeNosEmOrdem).toStrictEqual([1,2,3])
    })
    test('insere 4 nós e percorre a arvore em largura',()=>{
        const values = [5,2,6,4]
        const arvore = new Arvore(new No(values[0]))
        for(let i = 1; i < 4 ; i++ ){
            arvore.inserir(new No(values[i]))
        }
        expect(arvore.quantidade).toBe(4)
        expect(arvore.emLargura()).toStrictEqual([5,2,6,null,4,null,null,null,null])
        
    })

    test('Cria JSON para renderizar árvore', () => {
        const values = [5,2,6,4]
        const arvore = new Arvore(new No(values[0]))
        for(let i = 1; i < 4 ; i++ ){
            arvore.inserir(new No(values[i]))
        }
        console.log(arvore.getJSON())
        
    });

});