import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones-js", () => {
  test("getUser debe retornar un objeto", () => {
    const usuario = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const userTest = getUser();

    expect(usuario).toEqual(userTest);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Colette";
    const userActTest = getUsuarioActivo(nombre);
    // const usuario = {
    //   uid: "ABC567",
    //   username: nombre,
    // };

    //expect(usuario).toEqual(userActTest);
    expect(userActTest).toEqual({
        uid: "ABC567",
        username: nombre,
      })
  });
});
