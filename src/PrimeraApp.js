//Functional component
import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
  //   const saludo = {
  //       nombre: 'Colette',
  //       edad: 25,
  //   };

  return (
    <>
      {/* <h1>{ JSON.stringify(saludo, null, 3)}</h1> */}
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un sub",
};

export default PrimeraApp;
