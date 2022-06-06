import { useState, useEffect } from 'react';
import { Relogio } from './Relogio/index'
import { delay } from '../../common/utils/date'
import styles from './Cronometro.module.scss'

interface ICronometro {
  tempo: number,
  tempoFinalizado:() => void
}

export const Cronometro = ({ tempoFinalizado, tempo }: ICronometro) => {
  const [rodando, setRodando] = useState<boolean>(false);
  const [tempoRestante, setTempoRestante] = useState<number>(0);

  useEffect(() => {
    setTempoRestante(tempo)
  }, [tempo])

  async function iniciaCronometro() {
    setRodando(true);
    let contador = tempoRestante;

    while (contador > 0){
      await delay();
      setTempoRestante(tempoRestante => tempoRestante - 1);
      contador--;
    }
    pararCronometro();
  }

  function pararCronometro(){
    setRodando(false);
    tempoFinalizado();
  }
  
  return (
    <div className={styles.cronometro}>
      <p>Escolha um exercicio e inicie o cronometro</p>
      <div className={styles.relogioWrapper}>
        <Relogio totalSegundos={tempoRestante}/>
      </div>
      <button disabled={rodando} onClick={iniciaCronometro}>Iniciar</button>
    </div>
  )
}