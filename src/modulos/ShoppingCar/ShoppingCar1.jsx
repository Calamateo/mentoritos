import React from "react";
import ShoppingCar2 from "./ShoppingCar2";

const modalCarritodecompra = () => {
    return (
        <div>
            <div className="modal fade" id="payment" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Reservación de mentoría</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <h3>¿Qué tipo de clase estás buscando?</h3>
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
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancelar
                                </button>
                                <button type="button" class="btn btn-outline-success rounded-pill my-3" data-bs-toggle="modal" data-bs-target="#payment2">
                                        Siguiente
                                </button>
                            </div>
                            <ShoppingCar2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default modalCarritodecompra;