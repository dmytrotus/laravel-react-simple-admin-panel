import React from 'react';

function Modal(props){
   
   const modalState = props.modalState;

  return(
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{modalState.message}</h5>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal;