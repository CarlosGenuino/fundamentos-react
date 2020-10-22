import React from 'react'
import IF from './If'
export default props => {
    return(
        <div>
            <IF test={props.usuario && props.usuario.nome}>
                <div>
                    Seja bem vindo <strong>{props.usuario.nome}</strong>!
                </div>
            </IF>
            <IF test={!props.usuario || !props.usuario.nome}>
                    <div>
                        Seja bem vindo <strong>Brother</strong>!
                    </div>
            </IF>
        </div>
    )
    
}