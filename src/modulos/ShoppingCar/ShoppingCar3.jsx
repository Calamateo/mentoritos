import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingCar3 = () => {
    return (
        <div className='margin-top-payment'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Medio de comunicación</h5>
                        <Link to="/mentorsProfile"><i class="fa fa-times" aria-hidden="true"></i></Link>
                    </div>
                    <div className="modal-body text-center">
                        <button type="button" className="btn btn-lg mx-1 rounded-pill color-lila">Zoom</button>
                        <button type="button" className="btn btn-lg mx-1 rounded-pill color-lila">Facetime</button>
                        <button type="button" className="btn btn-lg mx-1 rounded-pill color-lila">Meet</button>
                    </div>
                    <div className="modal-footer">
                        <Link to="/ShoppingCar2" className="btn rounded-pill mt-2 py-1">Anterior</Link>
                        <Link to="/ShoppingCar4" className="btn btn-primary buttons rounded-pill mt-2">Siguiente</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCar3