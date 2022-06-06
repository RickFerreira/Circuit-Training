import {Item} from './Item/index'
import { IExercicio } from '../../types/Exercicio'
import styles from './Lista.module.scss'

interface ILista {
  lista: IExercicio[],
  abreItem: (item: IExercicio, index: number) => void
}

export const Lista = ({ lista, abreItem }: ILista) => {
  return (
    <aside className={styles.listaExercicios}>
      <h2>Circuito de hoje</h2>
      <ul>
        {lista.map((item, index) => (
            <Item 
              key={item.id}
              item={item} 
              index={index} 
              abreItem={abreItem}
            />
          ))}
      </ul>
    </aside>
  )
}