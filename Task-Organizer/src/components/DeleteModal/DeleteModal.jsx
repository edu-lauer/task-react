import React from "react"
import './deleteModal.scss'


const DeleteModal = () => {
    return (
        <>
            <div className="deleteModalContainerMain">
                <div className="deleteModal">
                    <h1 className="deleteModal__title">Deseja excluir esse item?</h1>
                    <h5 className="deleteModal__subtitle">Colocar as descrições da tarefa aqui.</h5>
                    <div className="deleteModal__btns">
                        <button className="deleteModal__btns-no">Não</button>
                        <button className="deleteModal__btns-yes">Sim</button>
                    </div>
                </div>
            </div>
        </>
    )
}