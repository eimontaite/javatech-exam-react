import React from 'react';
import {Table} from 'react-bootstrap';

const BooksTableListComponent = (props) => {
    return (
        <Table condensed hover responsive>
            <thead>
                <tr>
                    <th>Viršelis</th>
                    <th>Pavadinimas</th>
                    <th>Autorius</th>
                    <th>Kaina</th>
                    <th>Puslapių skaičius</th>
                    <th>Būklė</th>
                    <th>Kiekis</th>
                    <th>Institucijos</th>
                    {/* <th>OTHER</th> */}
                </tr>
            </thead>
            <tbody>
                {props.books}
            </tbody>
        </Table>)
}

export default BooksTableListComponent;