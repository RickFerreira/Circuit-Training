import React from 'react';
import { useState } from 'react';
import { IExercicio } from '../../types/Exercicio';
import styles from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface IFormulario {
  setLista: React.Dispatch<React.SetStateAction<IExercicio[]>>;
}


export const Form = ({ setLista }: IFormulario) => {
  const [exercicio, setExercicio] = useState('')
  const [tempo, setTempo] = useState('00:00')

  function salvarExercicio(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const novaExercicio = {
      exercicio, 
      tempo,
      id: uuidv4()
    };
    setLista(listaAnterior => [
      ...listaAnterior,
      {
        ...novaExercicio,
        completado: false,
        selecionado: false
      }
    ]);
    resetaFormulario();
  }

  function resetaFormulario() {
    setExercicio('');
    setTempo('00:00');
  }

  return (
    <form onSubmit={salvarExercicio} className={styles.novoExercicio}>
      <div className={styles.inputContainer}>
        <label htmlFor="exercicio">Novo exercicio</label>
        <input 
          type="text" 
          name="exercicio" 
          id="exercicio" 
          value={exercicio}
          placeholder="O que você vai treinar?" 
          onChange={(evento) => { setExercicio(evento.target.value) }}
          required/>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo para fazer</label>
        <input 
          type="time"
          step="1" 
          name="tempo" 
          id="tempo" 
          min="00:00:00"
          max="01:00:00"
          value={tempo}
          onChange={(evento) => { setTempo(evento.target.value) }}
          required/>
        </div>
      <button className={styles.Botao} type="submit">Adicionar na lista</button>
    </form>
  )
}