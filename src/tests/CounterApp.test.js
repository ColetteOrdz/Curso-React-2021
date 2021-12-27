import React from "react";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";
import {shallow} from "enzyme";

describe('Pruebas en <CounterApp/>', () => {
    test('Debe renderizar correctamente <CounterApp/>', () => {
        const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);
        const nuevoValor = wrapper.find('h2').text();

        expect(nuevoValor).toBe('100');
    })
});