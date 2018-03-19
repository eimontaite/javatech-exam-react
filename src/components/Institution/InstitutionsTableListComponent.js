import React from 'react';
import {Table} from 'react-bootstrap';


const InstitutionTableListComponent = (props) => {
    return (
        <Table condensed hover responsive>
            <thead>
                <tr>
                    <th>Nuotrauka</th>
                    <th>Pavadinimas</th>
                    <th>Miestas</th>
                    <th>Kategorija</th>
                    <th>Bibliotekos arba knygyno tipas</th>
                    <th>Nuomos tipas</th>
                    <th>Archyvo tipas</th>
                </tr>
            </thead>
            <tbody>{props.institution}</tbody>
        </Table>

    )
}

export default InstitutionTableListComponent;