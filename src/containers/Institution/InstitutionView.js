import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import SingleInstitutionCardComponent from '../../components/Institution/SingleInstitutionCardComponent'
import BookListCardComponent from '../../components/Book/BookListCardComponent'
import BooksTableListComponent from '../../components/Book/BookTableListComponent';

class InstitutionView extends Component {
    institutionId = this.props.institutionId;
    state = {
        institution: '',
        books: ''
    }

    componentWillMount = () => {
        axios.get('http://localhost:8080/api/institution/' + this.institutionId)
            .then((response) => {
                this.setState({
                    institution: this.composeInstitution(response.data)
                })
                this.getBooksFromInstitution();
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })

    }

    getBooksFromInstitution = () => {
        axios.get('http://localhost:8080/api/institution/' + this.institutionId + '/book')
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
        axios.delete('http://localhost:8080/api/institution/' + this.institutionId + '/book/' + bookId)
            .then((response) => {
                console.log(response.status)
                this.getBooksFromInstitution();
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }

    composeBooks = (book, index) => {
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


    composeInstitution = (inst) => {
        return (<SingleInstitutionCardComponent
            id={inst.id}
            title={inst.title}
            city={inst.city}
            image={inst.image}
            category={inst.category}
            libraryBookstoreType={inst.libraryBookStoreType}
            rentalType={inst.rentalType}
            archiveType={inst.archiveType}
        />)
    }

    render() {
        return (
        <Aux>
            <div>{this.state.institution}</div>
            {/* blocked updates will be the end of me. commenting this out, will think about it later */}
            {/* <Link to={'/institution/' + this.props.institutionId + '/add/book'}><Button bsSize="lg" bsStyle="info">Priskirti knygą</Button></Link> */}
            <div><BooksTableListComponent books={this.state.books} /></div>
        </Aux>)
    }
}

export default InstitutionView;
