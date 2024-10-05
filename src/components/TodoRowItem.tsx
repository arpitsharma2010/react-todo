import React from "react"

export const ToDoRowItem: React.FC<{
    rowNumber: number, 
    rowAssigned: string, 
    deleteTodo: Function, 
    rowDescription: string
    }> = (props) => {

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <td scope="row">{props.rowNumber}</td>
            <td scope="row">{props.rowDescription}</td>
            <td scope="row">{props.rowAssigned}</td>
        </tr>
    )
}