import React, { useState } from 'react';
import Item from './Item';
import style from './Lista.module.scss'

function Lista() {
  const [exercicios, setExercicios] = useState([{
    exercicio: 'Polichinelo',
      tempo: '00:01:00'
  }, {
    exercicio: 'Burpe',
      tempo: '00:00:30'
  }, {
    exercicio: 'Prancha',
      tempo: '00:01:20'
  }]);
  return (
    <aside className={style.listaExercicios}>
      <h2 onClick={() => {
        setExercicios([...exercicios, { exercicio: "Bicicleta", tempo: "00:05:00"}])
      }}> Lista de exercícios de hoje </h2>
      <ul>
        {exercicios.map((item, index) => (
          <Item 
            key={index}
            {...item}//chama tudo do objeto
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
