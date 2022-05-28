import React from 'react';
import Botao from '../Botao'
import style from'./Formulario.module.scss'

class Formulario extends React.Component {
    state = {
        exercicio: "",
        tempo: "00:00"
    }

    adicionarExercicio(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        console.log('state: ', this.state);
    }

    render(){
        return (
            <form className={style.novoExercicio} onSubmit={this.adicionarExercicio.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="exercicio">
                        Adicione um novo exercício
                    </label>
                    <input
                        type="text"
                        name="exercicio"
                        id="exercicio"
                        value={this.state.exercicio}
                        onChange={evento => this.setState({ ...this.state, exercicio: evento.target.value })}
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
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
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