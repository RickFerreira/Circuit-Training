import { IExercicio } from '../../../types/Exercicio'
import styles from './Exercicio.module.scss'

interface IItem {
  item: IExercicio,
  index: number,
  abreItem: (item: IExercicio, index: number) => void
}

export const Item = ({ item, index, abreItem }: IItem) => {
  return (
    <li
      className={`${styles.item} ${item.selecionado ? styles.itemSelecionado : ""} ${item.completado ? styles.itemCompletado : ""}`}
      onClick={() => !item.completado && abreItem(item, index)}>
      <h3>{item.exercicio}</h3>
      <span>{item.tempo}</span>
      {item.completado && <span className={styles.concluido} aria-label="icone de concluido"></span>}
    </li>
  )
}