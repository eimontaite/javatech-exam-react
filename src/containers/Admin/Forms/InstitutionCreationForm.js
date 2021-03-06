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
              <option value='USED_BOOKS'>Senos knygos</option>
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
