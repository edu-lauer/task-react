import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './editModal.scss'



const EditModal = ({ data }) => {

    const navigate = useNavigate()

    const { taskId } = useParams()
    const selectedTask = data.find((task) => task.id == taskId)

    const [newTitle, setNewTitle] = useState(`${selectedTask.title}`)

    const taskEdited = () => {
        if (newTitle) {
            selectedTask.title = newTitle
            navigate('/')
        } else {
            alert('Titulo vazio')
        }
    }

    return (
        <>
            <div className="editModalContainerMain">
                <div className="editModal">
                    <h1 className="editModal__title">Deseja editar esse item?</h1>
                    <input
                        className="editModal__subtitle"
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)} />
                    <div className="editModal__btns">
                        <button className="editModal__btns-no" onClick={() => {
                            navigate('/')
                        }}>Não</button>
                        <button className="editModal__btns-yes" onClick={() => {
                            taskEdited()
                        }}>Sim</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default EditModal