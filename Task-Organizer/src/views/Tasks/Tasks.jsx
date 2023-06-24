import React from "react"
import Header from '../../components/Header/Header'
import Table from "../../components/Table/Table"

const Tasks = ({ data }) => {
    return (
        <>
            <Header />
            <Table data={data} />
        </>
    )
}

export default Tasks