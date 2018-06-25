import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../../hoc/Aux';
import InstitutionCreationForm from '../Forms/InstitutionCreationForm';
import './Creation.css';

class InstitutionCreation extends Component {
    state = {
        title: '',
        city: '',
        image: '',
        category: '',
        libraryBookstoreType: 'ADULT',
        rentalType: 'USED_BOOKS',
        archiveType: 'PRIVATE',
        institutionType: 'BOOKSTORE'
    }

    fieldHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("Input field name: " + e.target.name)
        console.log("Input field value: " + e.target.value)
    }
    submitHandler = (e) => {
        e.preventDefault();
        const institutionParams = {
            institutionType: this.state.institutionType,
            title: this.state.title,
            city: this.state.city,
            image: this.state.image,
            category: this.state.category,
            libraryBookstoreType: this.state.libraryBookstoreType,
            rentalType: this.state.rentalType,
            archiveType: this.state.archiveType
        }
        axios.post('http://localhost:8080/api/institutions', institutionParams)
            .then((response) => {
                console.log(response.status)
                this.setState({
                    number: '',
                })
                this.props.history.push('/institutions')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Aux>
                <h3 className="creationHeader">Naujas institucijos įrašas</h3>
                <div><InstitutionCreationForm onSubmit={this.submitHandler} back={this.props.history.goBack} fieldHandler={this.fieldHandler} /></div>
            </Aux>)
    }
}

export default InstitutionCreation;