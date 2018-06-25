import React, {Component} from 'react';
import axios from 'axios';

import InstitutionCreationForm from '../Forms/InstitutionCreationForm';

class InstitutionEdit extends Component {
        institutionId = this.props.match.params.institutionId
        state = {
            title:'',
            city:'',
            image:'',
            category:'',
            libraryBookStoreType:'ADULT',
            bookRentalType:'USED_BOOKS',
            bookArchiveType:'PRIVATE',
            institutionType:'BOOKSTORE'
        }

    componentWillMount = () => {
        axios.get('http://localhost:8080/api/institutions/'+ this.institutionId)
            .then((response)=>{
                console.log(response)
                this.setState({
                    title: this.state.title,
                    city: this.state.city,
                    image: this.state.image,
                    category: this.state.category,
                    libraryBookstoreType: this.state.libraryBookstoreType,
                    rentalType: this.state.rentalType,
                    archiveType: this.archiveType
                })

            })
            .catch((error) => {
                console.log(error)
            })
        console.log("Institution id: " + this.institutionId)
        }
      
      fieldHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log("Input field name: " + e.target.name)
        console.log("Input field value: " + e.target.value)
      }

      submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/institutions/'+ this.institutionId, {
            institutionType: this.state.institutionType,
            title: this.state.title,
            city: this.state.city,
            image: this.state.image,
            category: this.state.category,
            libraryBookstoreType: this.state.libraryBookstoreType,
            rentalType: this.state.rentalType,
            archiveType: this.archiveType
        })
        .then((response)=>{
            console.log(response.status)
            this.setState({
                number:'',
            })
        })
        .catch((error) => {
            console.log(error)
        })
        }

      render(){
          return (
              <div>
                  <InstitutionCreationForm onSubmit={this.submitHandler} fieldHandler={this.fieldHandler} />
          </div>
          )
      }
}

export default InstitutionEdit;