import React from 'react';
import { Button } from "react-bootstrap";
import { Paper, TextField } from 'material-ui';

import Aux from "../../../hoc/Aux"
import './Forms.css';

const BookCreationForm = props => {

    return (
        <Aux>
            <form onSubmit={props.onSubmit} className="form">
                <Paper className='bookCreationForm' zDepth={2}>
                    <div className="form-group">
                        <label className="control-label">Autorius:</label>
                        <input type="text" className="form-control" value={props.author} onChange={props.fieldHandler} name="author" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Pavadinimas:</label>
                        <input type="text" className="form-control" value={props.title} onChange={props.fieldHandler} name="title" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Kaina:</label>
                        <input type="number" className="form-control" value={props.price} onChange={props.fieldHandler} name="price" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Kiekis:</label>
                        <input type="number" className="form-control" value={props.quantity} onChange={props.fieldHandler} name="quantity" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Būklė:</label>
                        <input type="text" className="form-control" value={props.condition} onChange={props.fieldHandler} name="condition" />
                    </div>
                </Paper>
                <div className='buttonBlock'>
                    <Button id='bookCreationSubmit' bsStyle="success" bsSize='lg' type="submit">Registruoti</Button>
                    {' '}
                    <Button id='bookCreationCancel' bsStyle="danger" bsSize='lg' type="button" onClick={props.back}>Atšaukti</Button>
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