import React from 'react';
import { Link } from 'react-router-dom';



const InstitutionListCardComponent = (props) => {
    return (
        <tr key={props.key}>
            <td>{props.image}</td>
            <td>{props.title}</td>
            <td>{props.city}</td>
            <td>{props.category}</td>
            <td>{props.libraryBookstoreType}</td>
            <td>{props.rentalType}</td>
            <td>{props.archiveType}</td>
            <td><Link to={'/institution/' + props.id + '/edit'} className='btn btn-primary'>Redaguoti</Link></td>
            <td><Link to={'/institution/' + props.id} className='btn btn-success'>Detaliau</Link></td>
            <td><button onClick={() => props.removeHandler(props.id)} className='btn btn-danger'>Pašalinti</button></td>
        </tr>
    )
}

export default InstitutionListCardComponent;