import React, { useState, useEffect } from "react"
import './table.scss'
import LineTable from "../LineTable/LineTable"
import addImg from '../../assets/img/add.svg'

const Table = ({ data }) => {

    const addNewTask = () => {
        if (!taskDesc) {
            alert("Inserir nova tarefa...")
        } else {
            const newTask = {
                "id": data.length + 1,
                "title": taskDesc,
                "description": "",
                "completed": false  
            }

            data.push(newTask)
            
            setDesc("")
            
            console.log(data)
        }
    }



    const [taskDesc, setDesc] = useState("")

    return (
        <section className="mainContainer">
            <h1 className="mainContainer__title">Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            <table className="mainContainer__table">
                <tr className="mainContainer__table-firstLine">
                    <th className="mainContainer__table-firstColumn">Tarefa</th>
                    <th className="mainContainer__table-secondColumn">Status</th>
                    <th className="mainContainer__table-thirdColumn">Opções</th>
                </tr>
                {
                    data.map((task) => (
                        <LineTable key={task.id} data={task} />
                    ))
                }
                <tr className="mainContainer__table-lastLine">
                    <input
                        className="mainContainer__table-lastLine-firstColumn"
                        type="text"
                        value={taskDesc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Nova tarefa..." />
                    <img className="mainContainer__table-lastLine-lastColumn" src={addImg} alt="" onClick={addNewTask}></img>
                </tr>
            </table>
        </section>
    )
}


export default Table