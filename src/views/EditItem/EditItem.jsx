import React from "react"
import './editItem.scss'
import Header from '../../components/Header/Header'
import EditModal from "../../components/EditModal/EditModal"

const EditItem = ({ data }) => {
    return (
        <>
            <Header />
            <EditModal data={ data } />
        </>
    )
}

export default EditItem