import React from 'react';
import Botao from '../Botao'
import style from'./Formulario.module.scss'

class Formulario extends React.Component {
    render(){
        return (
            <form className={style.novoExercicio}>
                <div className={style.inputContainer}>
                    <label htmlFor="exercicio">
                        Adicione um novo exercício
                    </label>
                    <input
                        type="text"
                        name="exercicio"
                        id="exercicio"
                        placeholder="Digite aqui o exercício"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao>
                    Adicionar exercício
                </Botao>
            </form>
        )
    }
}

export default Formulario;