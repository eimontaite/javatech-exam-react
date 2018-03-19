import React from 'react';

const BookListCardComponent = (props) => {
    return (
        <tr>
            <td>{props.image}</td>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.price}</td>
            <td>{props.pages}</td>
            <td>{props.condition}</td>
            <td>{props.quantity}</td>
            <button className="btn btn-danger" onClick={() => props.deleteHandler(props.id)} >Pašalinti</button>
        </tr>)
}

export default BookListCardComponent