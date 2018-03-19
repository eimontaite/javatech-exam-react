import React from 'react';
import {Button} from "react-bootstrap";
import {Paper, TextField} from 'material-ui';

import Aux from "../../../hoc/Aux"
import './Forms.css';

const BookCreationForm = props => {

    const {pristine, submitting, reset} = props;

    return (
        <Aux>
            <form onSubmit={props.submit} className="form">
                <Paper className='bookCreationForm' zDepth={2}>
                    <TextField name="author" autoFocus={true} hintText="Autorius" value={props.author} onChange={props.fieldHandler}/>
                    <br/>
                    <TextField name="title" hintText="Knygos pavadinimas" value={props.title} onChange={props.fieldHandler}/>
                    <br/>
                    {/* <DatePicker name="publishedAt" hintText="Išleidimo data:" openToYearSelection={true} value={props.date} onChange={props.fieldHandler}/> */}
                    <TextField name="quantity" hintText="Kiekis" value={props.quantity} onChange={props.fieldHandler}/>
                    <br/>
                    <TextField name="price" hintText="Kaina" value={props.price} onChange={props.fieldHandler}/>
                    <br/>
                    <TextField name="condition" hintText="Būklė" value={props.condition} onChange={props.fieldHandler}/>  
                </Paper>
                <div className='buttonBlock'>
                    <Button id='bookCreationSubmit' bsStyle="success" bsSize='lg' type="submit">Registruoti</Button>
                    {' '}
                    <Button id='bookCreationCancel' bsStyle="danger" bsSize='lg' type="button" disabled={submitting} onClick={props.back}>Atšaukti</Button>
                </div>
            </form>
        </Aux>
    )
};

export default BookCreationForm;

// const BookCreationForm = (props) => {
//     return (<div className="col-sm-8">
//         <form onSubmit={props.onSubmit} className="form-horizontal" >
//           <div className="form-group">
//             <label className="control-label col-sm-2">Title:</label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" value={props.title} onChange={props.fieldHandler}  name="title" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="control-label col-sm-2">author:</label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" value={props.author } onChange={props.fieldHandler}  name="author" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="control-label col-sm-2">pages:</label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" value={props.pages } onChange={props.fieldHandler}  name="pages" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="control-label col-sm-2">image:</label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" value={props.image } onChange={props.fieldHandler}  name="image" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="control-label col-sm-2">price: </label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" value={props.price} onChange={props.fieldHandler} name="price" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="control-label col-sm-2">condition:</label>
//             <div className="col-sm-10">          
//               <input type="text" className="form-control" value={props.condition } onChange={props.fieldHandler}  name="condition" />
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="control-label col-sm-2" >quantity:</label>
//             <div className="col-sm-10">          
//               <input type="text" className="form-control" value={props.quantity } onChange={props.fieldHandler}  name="quantity" />
//             </div>
//           </div>
  
         
        
//           <div className="form-group">        
//             <div className="col-sm-offset-2 col-sm-10">
//              <button className="btn btn-default">Submit</button>
//             </div>
//           </div>
//         </form>
//       </div>)  
//   }

//   export default BookCreationForm;