import React from 'react'

const ShoppingCar4 = () => {
    return (
        <div>
            <div className="modal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Pago</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" className="credit-card-div">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h1>Ingresar tarjeta</h1>
                                        <div className="row my-3">
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" placeholder="Ingresa tu número de tarjeta" />
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                                <span className="help-block text-muted small-font"> Mes de expiración</span>
                                                <input type="text" className="form-control" placeholder="MM" />
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                                <span className="help-block text-muted small-font"> Año de expiración</span>
                                                <input type="text" className="form-control" placeholder="AA" />
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                                <span className="help-block text-muted small-font">CCV</span>
                                                <input type="text" className="form-control" placeholder="CCV" />
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-12 pad-adjust">
                                                <input type="text" className="form-control" placeholder="Nombre del propietario***" />
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-md-4 col-sm-4 col-xs-4 pad-adjust">
                                                <a href="#offcanvasBotton3" data-bs-toggle="offcanvas"
                                                    className="btn btn-sm rounded-pill mt-5" role="button">Anterior</a>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4 pad-adjust">
                                                <input type="submit" className="btn btn-sm rounded-pill mt-5" value="Cancelar" />
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4 pad-adjust">
                                                <input type="submit" className="btn btn-sm rounded-pill mt-5" value="Pagar Ahora" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Anterior</button>
                            <button type="button" className="btn btn-primary">Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCar4