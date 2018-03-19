import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../../hoc/Aux';
import InstitutionCreationForm from '../Forms/InstitutionCreationForm';
import './Creation.css';

class InstitutionCreation extends Component {
    // train_id = this.props.params.train_id
    state = {
        title: '',
        city: '',
        image: '',
        category: '',
        libraryBookstoreType: 'ADULT',
        rentalType: 'OLD_BOOKS',
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
        axios.post('http://localhost:8080/api/institution', {
            institutionType: this.state.institutionType,
            title: this.state.title,
            city: this.state.city,
            image: this.state.image,
            category: this.state.category,
            libraryBookstoreType: this.state.libraryBookstoreType,
            rentalType: this.state.rentalType,
            archiveType: this.archiveType
        })
            .then((response) => {
                console.log(response.status)
                this.setState({
                    number: '',
                })
            })
            .catch((erorr) => {
                console.log(erorr)
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