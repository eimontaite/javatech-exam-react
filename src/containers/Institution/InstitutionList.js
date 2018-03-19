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
        axios.get('http://localhost:8080/api/institution')
            .then((response) => {
                this.setState({
                    institution: response.data.map(this.composeInstitution)
                })
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }
    removeHandler = (inst_id) => {
        axios.delete('http://localhost:8080/api/institution/' + inst_id)
            .then((response) => {
                console.log(response.status)
                this.getAllInstitution()
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }

    composeInstitution = (inst, index) => {
        return (
            <InstitutionListCardComponent
                key={index}
                id={inst.id}
                title={inst.title}
                city={inst.city}
                image={inst.image}
                category={inst.category}
                libraryBookStoreType={inst.libraryBookStoreType}
                bookRentalType={inst.bookRentalType}
                bookArchiveType={inst.bookArchiveType}
                removeHandler={this.removeHandler}
            />)
    }

    render() {
        return (<div className='list'>
            <Link to={'/institution/add/new'}><Button bsSize="lg" bsStyle="info">Nauja institucija</Button></Link>
            <br />
            <br />
            <InstitutionTableListComponent institution={this.state.institution} /></div>)
    }
}

export default InstitutionListContainer;
