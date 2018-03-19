import React, {Component} from 'react'
import axios from 'axios'
import SingleInstitutionCardComponent from '../../components/Institution/SingleInstitutionCardComponent'
import BookListCardComponent from '../../components/Book/BookListCardComponent'
import BooksTableListComponent from '../../components/Book/BookTableListComponent';

class InstitutionView extends Component {
    inst_id = this.props.params.inst_id
        state = {
            institution:'',
            books:''
        }

      componentWillMount = () =>{
        axios.get('http://localhost:8080/api/institution/'+this.inst_id)
        .then((response)=>{
            this.setState({
                institution:this.composeInstitution(response.data)
            })
            this.getBooksFromInstitution();
            console.log(response.status)
        })
        .catch((erorr) => {
            console.log(erorr)
        })
        
        }

        getBooksFromInstitution = () =>{
            axios.get('http://localhost:8080/api/institution/'+this.inst_id+'/book')
            .then((response)=>{
                this.setState({
                    books:response.data.map(this.composeBooks)
                })
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })
        
        }
        deleteHandler = (book_id) =>{
            axios.delete('http://localhost:8080/api/institution/' + this.inst_id + '/book/'+book_id)
            .then((response)=>{
                console.log(response.status)
                this.getBooksFromInstitution();
            })
            .catch((erorr) => {
                console.log(erorr)
            })
            

        }

        composeBooks = (book,index) =>{
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
                />
            )
        }


        composeInstitution = (inst) =>{
            return (<SingleInstitutionCardComponent
                id={inst.id}
                title={inst.title}
                city={inst.city}
                image={inst.image}
                category={inst.category}
                libraryBookStoreType={inst.libraryBookStoreType}
                bookRentalType={inst.bookRentalType}
                bookArchiveType={inst.bookArchiveType}
            />)
        }
    
    render() {
        return(<div>
            <div>{this.state.institution}</div>
            <div><BooksTableListComponent books={this.state.books}/></div>
        </div>)
    }
}

export default InstitutionView;
