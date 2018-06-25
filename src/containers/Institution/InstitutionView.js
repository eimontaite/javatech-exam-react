import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import SingleInstitutionCardComponent from '../../components/Institution/SingleInstitutionCardComponent'
import BookListCardComponent from '../../components/Book/BookListCardComponent'
import BooksTableListComponent from '../../components/Book/BookTableListComponent';
import InstitutionTableListComponent from "../../components/Institution/InstitutionsTableListComponent";

class InstitutionView extends Component {
    institutionId = this.props.match.params.institutionId
    state = {
        institution: '',
        books: ''
    }

    componentWillMount = () => {
        axios.get('http://localhost:8080/api/institutions/' + this.institutionId)
            .then((response) => {
                this.setState({
                    institution: response.data
                })
                this.getBooksFromInstitution();
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })

    }

    getBooksFromInstitution = () => {
        axios.get('http://localhost:8080/api/institutions/' + this.institutionId + '/book')
            .then((response) => {
                this.setState({
                    books: response.data.map(this.composeBooks)
                })
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })

    }
    deleteHandler = (bookId) => {
        axios.delete('http://localhost:8080/api/institutions/' + this.institutionId + '/book/' + bookId)
            .then((response) => {
                console.log(response.status)
                this.getBooksFromInstitution();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    composeBooks = (book) => {
        return (
            <BookListCardComponent
                id={book.id}
                title={book.title}
                author={book.author}
                pages={book.pages}
                image={book.image}
                price={book.price}
                condition={book.condition}
                quantity={book.quantity}
                deleteHandler={this.deleteHandler}
                basicList={true}
            />
        )
    }

    render() {
        return (
        <Aux>
            <div style={{textAlign:'center'}}>
                <h3>Pavadinimas: {this.state.institution.title}</h3>
                <h3>Miestas: {this.state.institution.city}</h3>
                <h3>Kategorija: {this.state.institution.category}</h3>
                <br/>
            </div>
            <div><BooksTableListComponent books={this.state.books} /></div>
        </Aux>)
    }
}

export default InstitutionView;
