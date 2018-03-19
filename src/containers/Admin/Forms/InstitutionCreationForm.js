import React from 'react';
import { Button } from "react-bootstrap";
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import { Paper } from 'material-ui';

import Aux from "../../../hoc/Aux";
import './Forms.css';

const InstitutionCreationForm = props => {

  return (
    <Aux>
      <form onSubmit={props.onSubmit} className="form">
        <Paper className='formPaper' zDepth={2}>
          <div className="form-group">
            <label className="control-label">Pavadinimas:</label>
            <input type="text" className="form-control" value={props.title} onChange={props.fieldHandler} name="title" />
          </div>
          <div className="form-group">
            <label className="control-label">Miestas:</label>
            <input type="text" className="form-control" value={props.city} onChange={props.fieldHandler} name="city" />
          </div>
          <div className="form-group">
            <label className="control-label">Kategorija:</label>
            <input type="text" className="form-control" value={props.category} onChange={props.fieldHandler} name="category" />
          </div>
          <div className="form-group" >
            <label className="control-label" >Institucijos tipas:</label>
            <select onChange={props.fieldHandler} className="form-control" name="institutionType">
              <option value='BOOKSTORE'>Knygynas</option>
              <option value='ARCHIVE'>Archyvas</option>
              <option value='RENTAL'>Nuoma</option>
              <option value='LIBRARY'>Biblioteka</option>
            </select>
          </div>
          <div className="form-group" >
            <label className="control-label" >Bibliotekoje (knygyne) siūloma literatūra:</label>
            <select onChange={props.fieldHandler} className="form-control " name="libraryBookstoreType">
              <option value='ADULT'>Suaugusiųjų</option>
              <option value='CHILD'>Vaikų</option>
            </select>
          </div>
          <div className="form-group" >
            <label className="control-label" >Nuomojamos knygos:</label>
            <select onChange={props.fieldHandler} className="form-control" name="rentalType">
              <option value='OLD_BOOKS'>Senos knygos</option>
              <option value='NEW_BOOKS'>Naujos knygos</option>
            </select>
          </div>
          <div className="form-group" >
            <label className="control-label" >Archyvo tipas:</label>
            <select onChange={props.fieldHandler} className="form-control" name="archiveType">
              <option value='PRIVATE'>Privatus</option>
              <option value='STATE'>Valstybinis</option>
            </select>
          </div>
        </Paper>
        <div className='buttonBlock form-group'>
          <Button id='institutionCreationSubmit' bsStyle="success" bsSize='lg' type="submit">Registruoti</Button>
          {' '}
          <Button id='institutionCreationCancel' bsStyle="danger" bsSize='lg' type="button" onClick={props.back}>Atšaukti</Button>
        </div>
      </form>
    </Aux>
  )
}

export default InstitutionCreationForm;



{/* <DropDownMenu onChange={props.fieldHandler}>
<MenuItem value='BOOKSTORE' primaryText="Knygynas" />
<MenuItem value='ARCHIVE' primaryText="Archyvas" />
<MenuItem value='RENTAL' primaryText="Nuoma" />
<MenuItem value='LIBRARY' primaryText="Biblioteka" />
</DropDownMenu>
<br />
<DropDownMenu onChange={props.fieldHandler}>
<MenuItem value='ADULT' primaryText="Saugusiųjų literatūra" />
<MenuItem value='CHILD' primaryText="Vaikų literatūra" />
</DropDownMenu>
<br />
<DropDownMenu onChange={props.fieldHandler}>
<MenuItem value='NEW_BOOKS' primaryText="Naujos knygos" />
<MenuItem value='OLD_BOOKS' primaryText="Skaitytos knygos" />
</DropDownMenu>
<br />
<DropDownMenu onChange={props.fieldHandler}>
<MenuItem value={'PRIVATE'} primaryText="Privati" />
<MenuItem value={'STATE'} primaryText="Valstybinė" />
</DropDownMenu>
<br /> */}

// import React, { Component } from 'react'


// const InstitutionForm = (props) => {
//   return (<div className="col-sm-8">
//     <form onSubmit={props.onSubmit} className="form-horizontal" >

//       <div className="form-group">
//         <label className="control-label col-sm-4">Title:</label>
//         <div className="col-sm-8">
//           <input type="text" className="form-control" value={props.title} onChange={props.fieldHandler} name="title" />
//         </div>
//       </div>
//       <div className="form-group">
//         <label className="control-label col-sm-4">City: </label>
//         <div className="col-sm-8">
//           <input type="text" className="form-control" value={props.city} onChange={props.fieldHandler} name="city" />
//         </div>
//       </div>
//       <div className="form-group">
//         <label className="control-label col-sm-4">image:</label>
//         <div className="col-sm-8">
//           <input type="text" className="form-control" value={props.image} onChange={props.fieldHandler} name="image" />
//         </div>
//       </div>
//       <div className="form-group">
//         <label className="control-label col-sm-4" >category:</label>
//         <div className="col-sm-8">
//           <input type="text" className="form-control" value={props.category} onChange={props.fieldHandler} name="category" />
//         </div>
//       </div>

//       <div className="form-group" >
//         <label className="control-label col-sm-4" >Chose your Institution type:</label>
//         <select onChange={props.fieldHandler} className="form-control" name="institutionType">
//           <option value='BOOK_STORE'>BOOK_STORE</option>
//           <option value='BOOK_ARCHIVE'>BOOK_ARCHIVE</option>
//           <option value='BOOK_RENTAL'>BOOK_RENTAL</option>
//           <option value='LIBRARY'>LIBRARY</option>
//         </select>
//       </div>


//       <div className="form-group " >
//         <label className="control-label col-sm-4" >Chose Library or Book store type:</label>
//         <select onChange={props.fieldHandler} className="form-control " name="libraryBookStoreType">
//           <option value='ADULT'>ADULT</option>
//           <option value='CHILD'>CHILD</option>
//         </select>
//       </div>
//       <div className="form-group" >
//         <label className="control-label col-sm-4" >Chose Book rentals type:</label>
//         <select onChange={props.fieldHandler} className="form-control" name="bookRentalType">
//           <option value='OLD_BOOKS'>BOOK_STORE</option>
//           <option value='NEW_BOOKS'>BOOK_ARCHIVE</option>
//         </select>
//       </div>
//       <div className="form-group" >
//         <label className="control-label col-sm-4" >Chose Book archyve type:</label>
//         <select onChange={props.fieldHandler} className="form-control" name="bookArchiveType">
//           <option value='PRIVATE'>PRIVATE</option>
//           <option value='STATE'>STATE</option>
//         </select>
//       </div>



//       <div className="form-group">
//         <div className="col-sm-offset-6 col-sm-12">
//           <button className="btn btn-default">Submit</button>
//         </div>
//       </div>
//     </form>
//   </div>)
// }

// export default InstitutionForm 