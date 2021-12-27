import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {
    test('Debe de retornar un heroe por id', () => {
        const id = 1;
        const heros = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect(heros).toEqual(heroeData);
        
    });

    test('Debe de retornar undefined', () => {
        const id = 10;
        const heroes = getHeroeById(id);

        expect(heroes).toBe(undefined);
        
    })

    test('Debe retornar arreglo de héroes de DC', () => {
        const owner = 'DC'
        const heroesFn = getHeroesByOwner(owner);
        const heroesOwn = heroes.filter(h => h.owner === owner);

        expect(heroesFn).toEqual(heroesOwn)
    })
    
    test('Debe ser igual a dos', () => {
        const owner = 'Marvel'
        const heroesFn = getHeroesByOwner(owner);

        expect(heroesFn.length).toBe(2)
    })

})
