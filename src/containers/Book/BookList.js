import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import BookListCardComponent from '../../components/Book/BookListCardComponent';
import BookTableListComponent from '../../components/Book/BookTableListComponent';
import '../Containers.css';

class BookList extends Component {
    state = {
        books: ''
    }
    componentWillMount = () => {
        this.getBooksFromInstitution()
    }

    getBooksFromInstitution = () => {
        axios.get('http://localhost:8080/api/books')
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
        axios.delete('http://localhost:8080/api/books/' + bookId)
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
                institution={book.institution}
                quantity={book.quantity}
                basicList={true}
                deleteHandler={this.deleteHandler}
            />
        )
    }


    render() {
        return (<div className='list'>
            <Link to={'/books/create'}><Button bsSize="lg" bsStyle="info">Nauja knyga</Button></Link>
            <br />
            <br />
            <BookTableListComponent deleteHandler={this.deleteHandler} books={this.state.books} /></div>)
    }
}

export default BookList;