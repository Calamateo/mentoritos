import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingCar2 = () => {
    return (
        <div className="margin-top-payment">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Escoge tu horario</h5>
                        <Link to="/mentorsProfile"><i class="fa fa-times" aria-hidden="true"></i></Link>
                    </div>
                    <div className="modal-body">
                        <div className='d-flex justify-content-center'>
                            <div className="input-group mx-4">
                                <select className="form-select color-lila" id="inputGroupSelect04" aria-label="Example select with button addon" required>
                                    <option selected disabled>Día</option>
                                    <option value="1">Lunes</option>
                                    <option value="2">Martes</option>
                                    <option value="3">Miércoles</option>
                                    <option>Jueves</option>
                                    <option>Viernes</option>
                                    <option>Sábado</option>
                                    <option>Domingo</option>
                                </select>
                            </div>
                            <div className="input-group mx-4">
                                <select className="form-select color-lila" id="inputGroupSelect04" aria-label="Example select with button addon" required>
                                    <option selected disabled>Hora</option>
                                    <option value="1">08:00 - 09:00</option>
                                    <option value="2">09:00 - 10:00</option>
                                    <option value="3">10:00 - 11:00</option>
                                    <option>11:00 - 12:00</option>
                                    <option>12:00 - 13:00</option>
                                    <option>13:00 - 14:00</option>
                                    <option>14:00 - 15:00</option>
                                    <option>15:00 - 16:00</option>
                                    <option>16:00 - 17:00</option>
                                    <option>17:00 - 18:00</option>
                                    <option>18:00 - 19:00</option>
                                    <option>19:00 - 20:00</option>
                                    <option>20:00 - 21:00</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Link to="/ShoppingCar" className="btn rounded-pill mt-2 py-1">Anterior</Link>
                        <Link to="/ShoppingCar3" className="btn btn-primary buttons rounded-pill mt-2">Siguiente</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCar2