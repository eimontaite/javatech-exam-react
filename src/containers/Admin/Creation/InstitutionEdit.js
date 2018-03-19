import React, {Component} from 'react';
import axios from 'axios';
import InstitutionCreationForm  from '../Forms/InstitutionCreationForm';

class InstitutionEdit extends Component {
        institutionId = this.props.params.institutionId
        state = {
            title:'',
            city:'',
            image:'',
            category:'',
            libraryBookStoreType:'ADULT',
            bookRentalType:'OLD_BOOKS',
            bookArchiveType:'PRIVATE',

            institutionType:'BOOKSTORE'
        }
      
      fieldHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
        console.log("Input field name: " + e.target.name)
        console.log("Input field value: " + e.target.value)
      }

      submitHandler = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:8080/api/institution/'+this.institutionId, {
            institutionType:this.state.institutionType,
            title:this.state.title,
            city:this.state.city,
            image:this.state.image,
            category:this.state.category,
            libraryBookStoreType:this.state.libraryBookstoreType,
            bookRentalType:this.state.rentalType,
            bookArchiveType:this.archiveType
        })
        .then((response)=>{
            console.log(response.status)
            this.setState({
                number:'',
            })
        })
        .catch((erorr) => {
            console.log(erorr)
        })
        }

      render(){
          return(<div><InstitutionCreationForm onSubmit={this.submitHandler} fieldHandler={this.fieldHandler} /></div>)
      }
}

export default InstitutionEdit;