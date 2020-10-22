import React from 'react'
import produtos from '../../data/produtos';
import './TabelaProduto.css'

export default props => {

    const tableRows = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <table className="center">
            <thead>
                <tr>
                    <td>Código</td>
                    <td>Nome</td>
                    <td>Preço</td>
                </tr>
            </thead>
            {tableRows}
        </table>
    )

}