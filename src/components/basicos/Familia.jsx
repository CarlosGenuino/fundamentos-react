import React from 'react'
import FamiliaMembro from './FamiliaMembro'
 

export default props => (
    <div>
        <FamiliaMembro nome="João" sobrenome={props.sobrenome}/>
        <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
        <FamiliaMembro nome="Caio" sobrenome="Alvares" />
    </div>
)