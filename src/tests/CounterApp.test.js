import React from "react";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("Pruebas en <CounterApp/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe renderizar correctamente <CounterApp/>", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("100");
  });

  test("Debe de incrementar el contador", () => {
    wrapper.find("button").at(0).simulate("click");
    //console.log(btn1.html())
    const counterText = wrapper.find("h2").text();

    expect(counterText).toEqual("11");
  });

  test("Debe de disminuir el contador", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text();

    expect(counterText).toEqual("9");
  });

  test("Debe de mostrar el valor por defecto con el botón reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text();
    //console.log(counterText)

    expect(counterText).toBe("105");
  });
});
