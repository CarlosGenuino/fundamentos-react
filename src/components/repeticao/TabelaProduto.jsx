import React from 'react'
import produtos from '../../data/produtos';
import './TabelaProduto.css'

export default props => {

    const tableRows = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    return (
        <table className="center">
            {tableRows}
        </table>
    )

}