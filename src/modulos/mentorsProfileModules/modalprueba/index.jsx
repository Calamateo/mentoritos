import React from 'react'

function Modalpruebacaro() {
  return (
    <div
    className="modal fade"
    id="modaltestcaro"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Editar información de perfil</h5>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
        </div>    
    </div>
  </div>
</div>
    
  )
}

export {Modalpruebacaro}
