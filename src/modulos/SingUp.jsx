import React from 'react'
import '../Css/singUP.css'

function SingUp() {
    <style>

    </style>



    return (
        <div>
            <section class="form-section">
                <div class="text-form">
                    <h2>Te damos la bienvenida a </h2>
                    <h1>Mentoritos</h1>
                    <p className='text-white'>Por favor llena los siguientes campos para crear tu cuenta.</p>
                </div>
                <div class="row">
                    <div class="col "></div>
                    <div class="col-md-6">
                        <div class="form-container ">
                            <form class="needs-validation w-100" novalidate>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="validationTooltip01">Nombre</label>
                                        <input type="text" class="form-control form-input" id="validationTooltip01"
                                            placeholder="Nombre" required />
                                        <div class="valid-tooltip">
                                            ¡Se ve bien!
                                        </div>

                                        <label for="validationTooltip02">Apellido</label>
                                        <input type="text" class="form-control form-input" id="validationTooltip02"
                                            placeholder="Apellido" required />
                                        <div class="valid-tooltip">
                                            ¡Se ve bien!
                                        </div>

                                        <label for="validationTooltipUsername">Nombre de usuario</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                            </div>
                                            <input type="text" class="form-control form-input" id="validationTooltipUsername"
                                                placeholder="Usuario" aria-describedby="validationTooltipUsernamePrepend" required />
                                            <div class="invalid-tooltip">
                                                Por favor elige otro usuario
                                            </div>
                                        </div>

                                        <label for="validationTooltip03">Ciudad</label>
                                        <input type="text" class="form-control form-input" id="validationTooltip03"
                                            placeholder="Ciudad" required />
                                        <div class="invalid-tooltip">
                                            El nombre de la ciudad es invalido. Prueba otra vez.
                                        </div>

                                        <label for="validationTooltip04">Estado</label>
                                        <input type="text" class="form-control form-input" id="validationTooltip04"
                                            placeholder="Estado" required />
                                        <div class="invalid-tooltip">
                                            Por favor introduce un estado valido.
                                        </div>

                                        <label for="exampleInputEmail1">Correo electrónico</label>
                                        <input type="email" class="form-control form-input" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Introduce tu correo electrónico" />
                                        <small id="emailHelp" class="form-text text-muted">No compartiremos tu correo con nadie
                                            más.</small>

                                        <div>
                                            <label for="exampleInputPassword1">Contraseña</label>
                                            <input type="password" class="form-control form-input" id="exampleInputPassword1"
                                                placeholder="Contraseña" />
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input " id="exampleCheck1" />
                                            <label class="form-check-label" for="exampleCheck1">Acepto términos y
                                                condiciones</label>
                                        </div>
                                        <button class="btn buttons " type="submit">Siguiente</button>
                                    </div>
                                </div>
                            </form>
                            {/* <div class="col form-img" class="">
                                <img src="../../global/assets/images/signUp/onlineclass.svg" class="form-img" alt="mentorito" />
                            </div> */}

                        </div>
                    </div>
                    <div class="col "></div>
                </div>
            </section>
        </div>
    )
}

export default SingUp