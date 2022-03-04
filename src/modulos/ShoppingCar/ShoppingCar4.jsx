import React from 'react'
import { Link } from 'react-router-dom'

// const alert = () => {
//     alert("Pago realizado correctamente");
// }

const ShoppingCar4 = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="mt-5">
                <div className="modal-content modal-width">
                    <div className="modal-header">
                        <h5 className="modal-title">Pago</h5>
                        <Link to="/mentorsProfile"><i class="fa fa-times" aria-hidden="true"></i></Link>
                    </div>
                    <div className="modal-body">
                        <form action="#" className="credit-card-div">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h1>Ingresar tarjeta</h1>
                                    <div className="row my-3">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder="Ingresa tu número de tarjeta" required />
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-3 col-sm-3 col-xs-3">
                                            <span className="help-block text-muted small-font"> Mes de expiración</span>
                                            <input type="text" className="form-control" placeholder="MM" required />
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-3">
                                            <span className="help-block text-muted small-font"> Año de expiración</span>
                                            <input type="text" className="form-control" placeholder="AAAA" required />
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-3">
                                            <span className="help-block text-muted small-font">CCV</span>
                                            <input type="password" className="form-control" placeholder="CCV" required />
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-md-12 pad-adjust">
                                            <input type="text" className="form-control" placeholder="Nombre del propietario***" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <Link to="/ShoppingCar2" className="btn rounded-pill mt-2 py-1">Anterior</Link>
                        <Link to="/MentorsMenu" className="btn btn-primary buttons rounded-pill mt-2" >Pagar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCar4