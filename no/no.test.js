import {No} from './no'
import {Paciente} from '../paciente/paciente'

describe('Testes da classe No', () => {
    test('criar objeto No', () => {
        let n = new No();
        expect(n instanceof No).toBe(true);
    });
    test('No com paciente sem proximo', () => {
        let p = new Paciente("Fulano",30);
        let n = new No(p);

        expect(n.dado).toBe(p);
        expect(n.proximo).toBe(null);

    });

    test('No com paciente e apontando para outro no',()=>{
        let p1 = new Paciente('Fulano',30);
        let n1 = new No(p1);

        let p2 = new Paciente('José',25);
        let n2 = new No(p2,n1);
        
        expect(n2.proximo).toBe(n1);
        expect(n2.proximo.dado).toBe(p1);
        expect(n2.proximo.proximo).toBe(null);
    })
});