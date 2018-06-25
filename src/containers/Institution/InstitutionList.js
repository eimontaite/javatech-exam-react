import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import InstitutionListCardComponent from '../../components/Institution/InstitutionListCardComponent';
import InstitutionTableListComponent from '../../components/Institution/InstitutionsTableListComponent';
import '../Containers.css';

class InstitutionListContainer extends Component {
    state = {
        institution: ''
    }

    componentWillMount = () => {
        this.getAllInstitutions();
    }

    getAllInstitutions = () => {
        axios.get('http://localhost:8080/api/institutions')
            .then((response) => {
                this.setState({
                    institution: response.data.map(this.composeInstitution)
                })
                console.log(response.status)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    removeHandler = (institutionId) => {
        axios.delete('http://localhost:8080/api/institutions/delete/' + institutionId)
            .then((response) => {
                console.log(response.status)
                this.getAllInstitutions()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    composeInstitution = (institution, index) => {
        return (
            <InstitutionListCardComponent
                key={index}
                id={institution.id}
                title={institution.title}
                city={institution.city}
                image={institution.image}
                category={institution.category}
                libraryBookstoreType={institution.libraryBookstoreType}
                rentalType={institution.rentalType}
                archiveType={institution.archiveType}
                removeHandler={this.removeHandler}
            />)
    }

    render() {
        return (<div className='list'>
            <Link to={'/institutions/add/new'}><Button bsSize="lg" bsStyle="info">Nauja institucija</Button></Link>
            <br />
            <br />
            <InstitutionTableListComponent institution={this.state.institution} /></div>)
    }
}

export default InstitutionListContainer;
