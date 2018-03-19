import React from 'react';
import '../../Modal/CreatedUser/CreatedUser.css'

const VisitDetails = (props) => {
    return (
        <div className="creationModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Informacija apie vizitą</h5>
                    </div>
                    <div className="modal-body" style={{textAlign: 'left'}}>
                        <p>Data: <strong>{props.date}</strong></p>
                        <p>Gydytojas: <strong>{props.doctorFirstName}{' '}{props.doctorLastName}</strong></p>
                        <p>Diagnozė: <strong>{props.diagnosisTitle}</strong></p>
                        <p>Diagnozės aprašymas: <strong>{props.diagnosisDescription}</strong></p>
                        <p>Pastabos: <strong>{props.notes}</strong></p>
                        <p>Vizito pobūdis: <strong>{props.visitType}{', '}{props.compensated}</strong></p>
                        <p>Vizito trukmė: <strong>{props.appointmentLength} min</strong></p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.hide} type="button" className="btn btn-secondary" data-dismiss="modal">Uždaryti</button>
                    </div>
                </div>
            </div>
        </div>)
};

export default VisitDetails;
