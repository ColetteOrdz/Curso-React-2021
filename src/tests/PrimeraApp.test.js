import React from "react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas en <PrimeraApp/>", () => {
  test("Debe de mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola crayola";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola crayola";
    const subtitulo = "Soy un sub";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find('p').text();
    
    expect(textoParrafo).toBe(subtitulo);
  });
});
