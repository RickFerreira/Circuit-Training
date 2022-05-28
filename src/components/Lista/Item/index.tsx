import style from '../Lista.module.scss';

export default function Item ({exercicio, tempo}: { exercicio: string, tempo: string}) {
    return (
        <li className={style.item}>
            <h3> {exercicio} </h3>
            <span> {tempo} </span>
        </li>
    )
}