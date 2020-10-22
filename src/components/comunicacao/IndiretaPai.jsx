import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let [nome, setNome] = useState('?');
    let [idade, setIdade] = useState(0);
    let [nerd, setNerd] = useState(false);
    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>Dad Info</div>
            <div>{nome}</div>
            <div>{idade}</div>
            <div>{nerd ? 'Pai nerd':'Pai não nerd'}</div>
            
            <IndiretaFilho quandoClick={fornecerInformacoes}/>
        </div>
    )
}