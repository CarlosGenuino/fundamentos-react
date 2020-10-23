import React, {Component} from 'react'
import Display from './Display'
import Buttons from './Buttons'
import PassoForm from './PassoForm'
import './Contador.css'


class Contador extends Component {
    state = {
        valor: this.props.valor || 0,
        passo: this.props.passo || 5
    }

    inc = () => {
        this.setState(
            {
                valor: this.state.valor + this.state.passo
            }
        )
    }

    dec = () => {
        this.setState(
            {
                valor: this.state.valor - this.state.passo
            }
        )
    }

    onChangePasso = (novoPasso) => {
        this.setState(
            {
                passo: novoPasso
            }
        )
    }

    render(){
        return (
            <div>
                <PassoForm 
                    passo={this.state.passo}
                    onPassChange={this.onChangePasso} 
                />
                <Display valor={this.state.valor}/>    
                <Buttons 
                    onAdd={this.inc} 
                    onRem={this.dec}
                />
            
            </div>
        )
    }
}

export default Contador;