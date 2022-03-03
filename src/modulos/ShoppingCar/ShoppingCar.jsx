import React from "react";
import { Link } from 'react-router-dom'

const modalCarritodecompra = () => {
    return (
        <div className="margin-top-payment">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Reservación de mentoría</h5>
                        <Link to="/mentorsProfile"><i class="fa fa-times" aria-hidden="true"></i></Link>
                    </div>
                    <div className="modal-body">
                        <h3>¿Qué tipo de clase estás buscando?</h3>
                        <div className="my-3">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Presencial
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    En linea
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Link to="/mentorsProfile" className="btn rounded-pill mt-2 py-1">Cancelar</Link>
                            <Link to="/ShoppingCar2" className="btn btn-primary buttons rounded-pill mt-2">Siguiente</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default modalCarritodecompra;