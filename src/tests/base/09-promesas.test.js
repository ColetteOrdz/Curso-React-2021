/* eslint-disable jest/no-conditional-expect */
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  test("getHeroeByIdAsync debe retornar un héroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0]);
      done();
    });
  });

  test("Debe obtener un error si el id no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toEqual("No se pudo encontrar el héroe");
      done();
    });
  });
});
