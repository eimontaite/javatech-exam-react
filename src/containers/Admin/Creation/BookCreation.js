import React, {Component} from 'react';
import axios from 'axios';

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
            quantity:''
        }

      submitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/api/book', {
            title: this.state.title,
            author: this.state.author,
            pages: this.state.pages,
            image: this.state.image,
            price: this.state.price,
            condition: this.state.condition,
            quantity: this.state.quantity
        })
        .then((response)=>{
            console.log(response.status)
        })
        .catch((erorr) => {
            console.log(erorr)
        })
    }
      fieldHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
        console.log("Input field name: " + e.target.name)
        console.log("Input field value: " + e.target.value)
      }

    render(){
        return(
            <Aux>
            <h3 className="creationHeader">Naujas knygos įrašas</h3>
        <div>
            <BookCreationForm 
            fieldHandler={this.fieldHandler} back={this.props.history.goBack} onSubmit={this.submitHandler}/>
            </div>
            </Aux>
        )
    }
}

export default BookCreation;