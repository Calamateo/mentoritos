import React from 'react'

const ShoppingCar2 = () => {
    return (
        <div>
            <div className="modal fade" id="payment2" tabIndex="1" aria-labelledby="payment2Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Escoge tu horario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex justify-content-center'>
                                <div className="btn-group">
                                    <button
                                        className="btn btn-secondary btn-lg dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Large button
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>Lunes</li>
                                        <li>Martes</li>
                                        <li>Miércoles</li>
                                        <li>Jueves</li>
                                        <li>Viernes</li>
                                        <li>Sábado</li>
                                        <li>Domingo</li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button
                                        className="btn btn-secondary btn-lg dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Large button
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>08:00 - 09:00</li>
                                        <li>09:00 - 10:00</li>
                                        <li>10:00 - 11:00</li>
                                        <li>11:00 - 12:00</li>
                                        <li>12:00 - 13:00</li>
                                        <li>13:00 - 14:00</li>
                                        <li>14:00 - 15:00</li>
                                        <li>15:00 - 16:00</li>
                                        <li>16:00 - 17:00</li>
                                        <li>17:00 - 18:00</li>
                                        <li>18:00 - 19:00</li>
                                        <li>19:00 - 20:00</li>
                                        <li>20:00 - 21:00</li>
                                        <li>21:00 - 22:00</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Anterior</button>
                            <button type="button" className="btn btn-primary">Siguiente</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCar2