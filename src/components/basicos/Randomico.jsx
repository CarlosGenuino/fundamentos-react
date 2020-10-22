import React from "react";

export default (props) => (
  <div>
    <h2>Valor Aleatório</h2>
    <p>
      <strong>Valor Mínimo </strong>
      {props.minimo}
    </p>

    <p>
      <strong>Valor Máximo </strong>
      {props.maximo}
    </p>
    <p>
      Seu numero Randomico é {getNumeroRandomico(props.minimo, props.maximo)}
    </p>
  </div>
);

const getNumeroRandomico = (min, max) => {
  return Math.random() * (max - min) + min;
};
