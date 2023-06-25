import React, { useState } from "react"
import './lineTable.scss'
import editImg from '../../assets/img/edit.svg'
import deleteImg from '../../assets/img/delete.svg'

const LineTable = ({ data }) => {

    const [check, setCheck] = useState()
    data.completed = check

    return (
        <tr className="itemToDo">
            <th className="itemToDo__title">{data.title}</th>
            <th className="itemToDo__status"><input type="checkbox" checked={data.completed} onClick={() => {
                if(data.completed) {
                    setCheck(false)
                    console.log(data) // Não sei se esta correto dessa forma
                } else {
                    setCheck(true)
                    console.log(data) // Não sei se esta correto dessa forma
                }
            }} /></th>
            <th className="itemToDo__options">
                <img className="itemToDo__option-edit" src={editImg} alt="" />
                <img className="itemToDo__option-delete" src={deleteImg} alt="" />
            </th>
        </tr>
    )
}


export default LineTable    