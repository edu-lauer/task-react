import React from "react"
import Header from '../../components/Header/Header'
import DeleteModal from '../../components/DeleteModal/DeleteModal'

const DeleteItem = ({ data }) => {
    return (
        <>
            <Header />
            <DeleteModal data={ data } />
        </>
    )
}

export default DeleteItem