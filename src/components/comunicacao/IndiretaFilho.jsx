import React from 'react'

export default props => {
    const qc = props.quandoClick
    const randowAge = ()=> parseInt(Math.random() * (20)) + 50
    const isNerd = ()=> Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button onClick={() => {
                qc('Ralf', randowAge(), isNerd());
            }}>Fornecer Informações</button>
        </div>
    )
}