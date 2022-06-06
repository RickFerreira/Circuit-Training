import { useState } from 'react'
import { Form } from '../components/Formulario/index'
import { Lista } from '../components/Lista/index'
import { Cronometro } from '../components/Cronometro/index'
import { IExercicio } from '../types/Exercicio'
import { timeToSeconds } from '../common/utils/date'
import styles from "./App.module.scss"
import Footer from '../components/layout/Footer'
import Home from '../components/layout/Home'


export const App = () => {
  const [lista, setLista] = useState<IExercicio[]>([]);
  const [idSelecionado, setIdSelecionado] = useState<string>();
  const [tempo, setTempo] = useState<number>(0);

  function selecionaItem(item: IExercicio, index: number) {
    setIdSelecionado(item.id);
    setLista((listaAnterior: IExercicio[]) =>
      listaAnterior.map((itemAnterior: IExercicio, indexAnterior: number) => {
        itemAnterior.selecionado = false;
        if(indexAnterior === index) itemAnterior.selecionado = true;
        return itemAnterior;
      })
    )
    const segundos = timeToSeconds(item.tempo);
    setTempo(segundos);
  }

  function exercicioFinalizada() {
    if (idSelecionado) {
      setLista((listaAnterior: IExercicio[]) =>
        listaAnterior.map((itemAnterior: IExercicio) => (
          itemAnterior.id === idSelecionado ? { ...itemAnterior, selecionado: false, completado: true } : itemAnterior
        )))
      setTempo(0);
    }
  } 

  return (
    <div>
      <Home></Home>
      <div className={styles.AppStyle}>
        <Form setLista={setLista} />
        <Cronometro tempoFinalizado={exercicioFinalizada} tempo={tempo} />
        <Lista lista={lista} abreItem={selecionaItem} />
      </div>
      <Footer></Footer>
    </div>

  );
}