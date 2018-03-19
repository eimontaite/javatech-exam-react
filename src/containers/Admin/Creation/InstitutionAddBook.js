import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import BookListCardComponent from '../../../components/Book/BookListCardComponent';
import BookTableListComponent from '../../../components/Book/BookTableListComponent';
import '../../Containers.css';

class InstitutionAddBook extends Component {
    institutionId = this.props.institutionId;
    state = {
        books: ''
    }
    componentWillMount = () => {
        this.getBooks()
    }

    getBooks = () => {
        axios.get('http://localhost:8080/api/book')
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

    addHandler = (bookId) => {
        axios.post('http://localhost:8080/api/institution/' + this.institutionId + '/book/' + bookId)
            .then((response) => {
                console.log(response.status)
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
                basicList={false}
                addHandler={this.addHandler}
            />
        )
    }


    render() {
        return (<div className='list'>
            <BookTableListComponent addHandler={this.addHandler} books={this.state.books} /></div>)
    }
}

export default InstitutionAddBook;