import React, {useState} from 'react'
import './InputForm.css'

export default (props) => {
    const [valor, setValor] = useState('Inicial')
    const onChangeValor = (e)=> setValor(e.target.value)
    return (
        
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1>Input</h1>
            <input value={valor} className="inputForm" onChange={onChangeValor} />
            <input value={valor} className="inputForm" readOnly />
        </div>
    )
} 