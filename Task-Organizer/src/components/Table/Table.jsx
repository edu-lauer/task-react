import React from "react"
import './table.scss'
import LineTable from "../LineTable/LineTable"

const Table = () => {
    return (
        <section className="mainContainer">
            <h1 className="mainContainer__title">Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            <table className="mainContainer__table">
                <tr className="mainContainer__table-firstLine">
                    <th className="mainContainer__table-firstColumn">Tarefa</th>
                    <th className="mainContainer__table-secondColumn">Status</th>
                    <th className="mainContainer__table-thirdColumn">Opções</th>
                </tr>
                {/* <LineTable /> */}
            </table>
        </section>
    )
}


export default Table