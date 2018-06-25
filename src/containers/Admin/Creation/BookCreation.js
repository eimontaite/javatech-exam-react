import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

import Aux from '../../../hoc/Aux';
import BookCreationForm from '../Forms/BookCreationForm';
import './Creation.css';

class BookCreation extends Component {
state = {
            title:'',
            author:'',
            pages:'',
            image:'',
            price:'',
            condition:'',
            quantity:'',
            institutions: [],
            institution: ''
        }

    componentDidMount = () => {
        this.getInstitutions()
    }

    getInstitutions = () => {
        axios.get('http://localhost:8080/api/institutions')
            .then((response) => {
                this.setState({
                    institutions: response.data.map(institution => {
                        return institution.title;
                    })
                })
                console.log(response.status)
            })
            .catch((error) => {
                console.log(error)
            })
    }


      submitHandler = (e) =>{
        e.preventDefault();
        const bookParams = {
            title: this.state.title,
            author: this.state.author,
            pages: this.state.pages,
            image: this.state.image,
            price: this.state.price,
            condition: this.state.condition,
            quantity: this.state.quantity,
            institution: this.state.institution
        }

        axios.post('http://localhost:8080/api/books', bookParams)
        .then((response)=>{
            console.log(response.status)
            console.log(response.data)
            this.props.history.push('/books')
        })
        .catch((error) => {
            console.log(error)
        })
    }
      fieldHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
        console.log("Input field name: " + e.target.name)
        console.log("Input field value: " + e.target.value)
      }

    handleDropdownChange(event) {
        let value = event.target.value;
        this.setState({
            institution: value
        });
        console.log("Pasirinkta: " + this.state.institution)
    }
    render(){
    console.log(this.state.institutions)
        let institutions = this.state.institutions;
        let dropdown =  institutions.map(institution =>
            <option key = {institution}>{institution}</option>)
        return(

            <Aux>
                <h3 className="creationHeader">Naujas knygos įrašas</h3>
        <div>
            <BookCreationForm 
                fieldHandler={this.fieldHandler} back={this.props.history.goBack} onSubmit={this.submitHandler} institutions={<select onChange={(e) => this.handleDropdownChange(e)}>{dropdown}</select>}/>
            </div>
            </Aux>
        )
    }
}

export default BookCreation;