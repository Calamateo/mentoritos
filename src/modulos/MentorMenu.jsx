import React from 'react'
//import mentor from './mentor'

function MentorMenu() {

    const myStyle = {
        color: "#533C73"
    }





    return (
        <div>
            {/* <!--inicio de modal de mentors-cards --> */}
            <div className="modal fade" id="mentorsCards" aria-labelledby="compraLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <div className="card bg-dark text-white ">
                                <img src=""
                                    id="imageProfile"
                                    className="card-img-top" alt="imagen perfil" />
                                <div className="card-body" id="contentProfile">



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- final de modal de  mentors-cards  --> */}
            {/* <!--inicio de modal para agregar un nuevo elemento al menu de mentores--> */}

            <div className="modal fade " id="ModalADD" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Agrega un nuevo mentorito</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>

                                <div className="form-row mb-3">
                                    <div className="col mb-3">
                                        <input id="name" type="text" className="form-control" placeholder="Nombre" />
                                    </div>
                                    <div className="col mb-3">
                                        <input id="lastName" type="text" className="form-control" placeholder="Apellido" />
                                    </div>
                                </div>

                                <div className="form-group col-mb-3">
                                    <label htmlFor="inputClas">Asignatura</label>
                                    <select id="inputClas" className="form-control">
                                        <option selected>Selecciona..</option>
                                        <option value="Música">Música</option>
                                        <option value="Matemáticas">Matemáticas</option>
                                        <option value="Quimica">Quimica</option>
                                        <option value="Canto">Canto</option>
                                        <option value="Pintura Óleo">Pintura Óleo</option>
                                        <option value="Acuarela">Acuarela</option>
                                        <option value="Inglés">Inglés</option>
                                        <option value="Danza Contemporanea">Danza Contemporanea</option>
                                        <option value="Programación">Programación</option>
                                        <option value="Electrónica">Electrónica</option>
                                    </select>
                                </div>

                                <br />

                                <fieldset className="form-group row mb-3">
                                    <legend className="col-form-label col mb-3 float-sm-left pt-0">Modalidad</legend>
                                    <div className="col-9">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" checked
                                                value="option1" />
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">En linea</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                value="option2" disabled />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2" >Presencial</label>
                                        </div>
                                    </div>
                                </fieldset>


                                <div className="form-group col">
                                    <label htmlFor="Price">Precio de la clase por Hora</label>
                                    <input id="Price" type="text" className=" col-7 form-control" placeholder="$0.00  MXN" aria-label="Dollar amount (with dot and two decimal places)" />
                                </div>

                            </form>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- fin de modal para agregar un nuevo elemento al menu de mentores--> */}
            {/* <!-- /Header --> */}

            {/* <!-- introduccion carrusel de mentores  --> */}
            <div className="container" id="home">

                <div className="text-center mt-3" style={{ color: "black" }}>
                    <h2>Elige a tu <strong style={{ myStyle }}>mentorito</strong> favorito</h2>
                    <p>Aquí podrás encontrar una amplia variedad de mentores listos para acompañarte en tu proceso de aprendizaje.
                    </p>


                </div>

                {/* <!---En esta seccion va el filtro de busqueda --> */}
                <div className="row">
                    <div className="col-4">
                        <div className="form-group ">
                            <label form="inputClas"> Filtrar por Asignatura</label>
                            <select id="FilterClass" className="form-control">
                                <option selected>Selecciona..</option>
                                <option value="Música">Música</option>
                                <option value="Matemáticas">Matemáticas</option>
                                <option value="Quimica">Quimica</option>
                                <option value="Canto">Canto</option>
                                <option value="Pintura Óleo">Pintura Óleo</option>
                                <option value="Acuarela">Acuarela</option>
                                <option value="Inglés">Inglés</option>
                                <option value="Danza Contemporanea">Danza Contemporanea</option>
                                <option value="Programación">Programación</option>
                                <option value="Electrónica">Electrónica</option>
                            </select>
                        </div>

                    </div>

                    <div className="col-4">
                        <div className="form-group ">
                            <label form="inputClas"> Estrellas</label>
                            <select id="FilterStars" className="form-control">
                                <option selected>Selecciona..</option>
                                <option value="1">1 Estrella</option>
                                <option value="2">2 Estrellas</option>
                                <option value="3">3 Estrellas</option>
                                <option value="4">4 Estrellas</option>
                                <option value="5">5 Estrellas</option>

                            </select>
                        </div>

                    </div>

                    <div className="col-2 mt-4">
                        <button type="button" className="btn btn-primary"  >Filtrar</button>
                    </div>
                    <div className="col-2 mt-4">
                        <button type="button" className="btn btn-primary"  >Limpiar busqueda</button>
                    </div>


                </div>

            </div>
            {/* <!-- introduccion --> */}


            {/* <!-- pie de pagina --> */}


            {/* <!--           cards de mentores           --> */}
            <section id="Cards-Mentores" className=" row justify-content-md-center position-relative py-3">

            </section>




        </div>
    )
}

export default MentorMenu