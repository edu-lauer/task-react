import React from "react"
import './editModal.scss'



const EditModal = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="editModal">
                    <h1 className="editModal__title">Deseja editar esse item?</h1>
                    <h5 className="editModal__subtitle">Colocar as descrições da tarefa aqui.</h5>
                    <div className="editModal__btns">
                        <button className="editModal__btns-no">Não</button>
                        <button className="editModal__btns-yes">Sim</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default EditModal