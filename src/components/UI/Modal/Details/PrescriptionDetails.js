import React from 'react';
import './DetailsModal.css';

const PrescriptionDetails = (props) => {
    return (
        <div className="creationModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Informacija apie receptą</h5>
                    </div>
                    <div className="modal-body" style={{ textAlign: 'left' }}>
                        <p>Receptas išrašytas: <strong>{props.prescribedOn}</strong></p>
                        <p>Galioja iki: <strong>{props.validUntil}</strong></p>
                        <p>Veiklioji medžiaga: <strong>{props.activeIngredientTitle}</strong></p>
                        <p>Dozė: <strong>{props.activeIngredientPerDose}{' '}{props.activeIngredientUnits}</strong></p>
                        <p>Gydytojas: <strong>{props.doctorFirstName}{' '}{props.doctorLastName}</strong></p>
                        <p>Vartojimo aprašymas: <strong>{props.dosageNotes} </strong></p>
                        <p>Panaudota kartų: <strong>{props.fillsNo} </strong></p>
                        <div>{props.prescriptionFills}</div>
                    </div>
                    <div className="modal-footer">
                        {props.children}
                        <button onClick={props.hide} type="button" className="btn btn-secondary" data-dismiss="modal">Uždaryti</button>
                    </div>
                </div>
            </div>
        </div>)
};

export default PrescriptionDetails;
