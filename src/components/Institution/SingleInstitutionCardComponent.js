import React from 'react'

const SingleInstitutionCardComponent = (props) => {
    return (
        <tr key={props.key}>
            <td>Nuotrauka:{props.image}</td>
            <td>Pavadinimas:{props.title}</td>
            <td>Miestas:{props.city}</td>
            <td>{props.category}</td>
            <td>{props.libraryBookstoreType}</td>
            <td>{props.rentalType}</td>
            <td>{props.archiveType}</td>
        </tr>
    )
}

export default SingleInstitutionCardComponent