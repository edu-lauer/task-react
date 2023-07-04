import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import './deleteModal.scss'


const DeleteModal = ({ data }) => {

    const navigate = useNavigate()

    const { taskId } = useParams()
    const selectedTask = data.find((task) => task.id == taskId)

    const removeTask = () => {
        const postitionToRemove = taskId - 1
        data.splice(postitionToRemove, 1)
    }

    return (
        <>
            <div className="deleteModalContainerMain">
                <div className="deleteModal">
                    <h1 className="deleteModal__title">Deseja excluir esse item?</h1>
                    <h5 className="deleteModal__subtitle">{selectedTask.title}</h5>
                    <div className="deleteModal__btns">
                        <button className="deleteModal__btns-no" onClick={() => {
                            navigate('/')
                        }}>Não</button>
                        <button className="deleteModal__btns-yes" onClick={() => {
                            removeTask()
                            navigate('/')
                        }}>Sim</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal