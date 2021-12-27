import React from "react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme'

describe("Pruebas en <PrimeraApp/>", () => {
//   test('Debe mostrar el mensaje "Hola crayola"', () => {
//     const saludo = "Hola crayola";
//     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
//     expect(getByText(saludo)).toBeInTheDocument();
//   });

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = "Hola crayola"
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();

    })
});
