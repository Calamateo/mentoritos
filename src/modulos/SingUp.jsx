import React from "react";
import "../Css/singUP.css";

function SingUp() {
  <style></style>;

  return (
    <div>
      <section className="form-section">
        <div className="text-form">
          <h2>Te damos la bienvenida a </h2>
          <h1>Mentoritos</h1>
          <p className="text-white">
            Por favor llena los siguientes campos para crear tu cuenta.
          </p>
        </div>
        <div className="row">
          <div className="col "></div>
          <div className="col-md-6">
            <div className="form-container ">
              <form className="needs-validation w-100" novalidate>
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="validationTooltip01">Nombre</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="validationTooltip01"
                      placeholder="Nombre"
                      required
                    />
                    <div className="valid-tooltip">¡Se ve bien!</div>

                    <label htmlFor="validationTooltip02">Apellido</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="validationTooltip02"
                      placeholder="Apellido"
                      required
                    />
                    <div className="valid-tooltip">¡Se ve bien!</div>

                    <label htmlFor="validationTooltipUsername">
                      Nombre de usuario
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="validationTooltipUsernamePrepend"
                        >
                          @
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-input"
                        id="validationTooltipUsername"
                        placeholder="Usuario"
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                      <div className="invalid-tooltip">
                        Por favor elige otro usuario
                      </div>
                    </div>

                    <label htmlFor="validationTooltip03">Ciudad</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="validationTooltip03"
                      placeholder="Ciudad"
                      required
                    />
                    <div className="invalid-tooltip">
                      El nombre de la ciudad es invalido. Prueba otra vez.
                    </div>

                    <label htmlFor="validationTooltip04">Estado</label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="validationTooltip04"
                      placeholder="Estado"
                      required
                    />
                    <div className="invalid-tooltip">
                      Por favor introduce un estado valido.
                    </div>

                    <label htmlFor="exampleInputEmail1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control form-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Introduce tu correo electrónico"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      No compartiremos tu correo con nadie más.
                    </small>

                    <div>
                      <label htmlFor="exampleInputPassword1">Contraseña</label>
                      <input
                        type="password"
                        className="form-control form-input"
                        id="exampleInputPassword1"
                        placeholder="Contraseña"
                      />
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input "
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Acepto términos y condiciones
                      </label>
                    </div>
                    <button className="btn buttons " type="submit">
                      Siguiente
                    </button>
                  </div>
                </div>
              </form>
              {/* <div className="col form-img" className="">
                                <img src="../../global/assets/images/signUp/onlineclass.svg" className="form-img" alt="mentorito" />
                            </div> */}
            </div>
          </div>
          <div className="col "></div>
        </div>
      </section>
    </div>
  );
}

export default SingUp;
