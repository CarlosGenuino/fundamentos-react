import React from 'react'

export default props => {

    
    return (
        <div>
            <div>Filho</div>
            <button onClick={() => {
                props.quandoClick('Ralf', 50, false);
            }}>Fornecer Informações</button>
        </div>
    )
}