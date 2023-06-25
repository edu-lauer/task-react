import React from "react"
import './lineTable.scss'
import editImg from '../../assets/img/edit.svg'
import deleteImg from '../../assets/img/delete.svg'
import addImg from '../../assets/img/add.svg'

const LineTable = ({ data }) => {
    return (
        <tr className="itemToDo">
            <th className="itemToDo__title">{data.title}</th>
            <th className="itemToDo__status"><input type="checkbox"/></th>
            <th className="itemToDo__options">
                <img className="itemToDo__option-edit" src={editImg} alt="" />
                <img className="itemToDo__option-delete" src={deleteImg} alt="" />
            </th>
        </tr>
    )
}


export default LineTable    