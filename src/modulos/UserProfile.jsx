import React from 'react'
/*import '../Css/mentorsProfile.css'*/
import { AcordionItem } from './mentorsProfileModules/AcordionItem'; 
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";


const UserProfileInformation = ({mentorP}) =>{
    <Router></Router>
    const {userId}=useParams();
    console.log(userId)
const imageProfile = require.context('../global/assets/images', true);
const [MentorP] = React.useState(mentorP);
    console.log(mentorP.state)
    let imagen = imageProfile(`${MentorP.imagePerfil}`)
    return (    
<<<<<<< HEAD
        
        <div className="container-xxl">
            <main className="pt-5 mt-5">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="card text-center sticky-md-top profile-card ">
                            <div className="card-header bg-white">
                                <h1 className="mt-2">Sofía Aguilar</h1>
                            </div>
                            <div className="card-img mt-3">
                                <img src={sofi('./Sofía Acosta Neptuno.png')} className="rounded-circle w-50" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-start mt-3">
                                    <i className="fas fa-map-marked-alt icons-size me-md-2"></i>
                                    <p className="text-start">Guadalajara, Jalisco</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>sa.aguilarvaldez@gmail.com</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>¡Hola! Me llamo Sofía y estoy buscando un mentor para aprender matemáticas.</p>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="col-lg-8 ">
                        <div className="card profile-card">
                            <div className="card-body" id="drop-description">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <AcordionItem numAcordion="One" acorTitle="Sobre mí" mentorInformation={mentorP.sobremi} />
                                    <AcordionItem numAcordion="Two" acorTitle="Logros" mentorInformation={mentorP.educacion} />
                                    <AcordionItem numAcordion="Three" acorTitle="Intereses" mentorInformation={mentorP.datosCuriosos} />
                                </div>

                                <div id='calendar'></div>
                                <div className="card-footer">
                                    <h2 className="mb-3">Comentarios</h2>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={imageAbout('./about-us/avatar.png')} className="rounded-circle" style={{ width: "100px" }} alt="..." />
                                        </div>
                                        <div className="col-6">
                                            <h2 className="titulo-comentario">Harry</h2>
                                            <p className="cometario"><small>Lorem ipsum, dolor sit amet consectetur adipisicing
                                                elit. Est, nostrum autem voluptates a quia architecto omnis atque quos sunt
                                                quas vel illo, voluptas hic, molestiae et accusamus culpa fugiat
                                                aliquid.</small></p>
                                        </div>
                                        <div className="col-3 text-warning">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={imageAbout('./about-us/avatar.png')} className="rounded-circle" style={{ width: "100px" }} alt="..." />
                                        </div>
                                        <div className="col-6">
                                            <h2 className="titulo-comentario">Draco</h2>
                                            <p className="cometario"><small>Pesimo servicio, tuvo la osadia de hablarme como si
                                                fuera su igual, es un sangre sucia inmunda.
                                                Mi padre se enterara de esto!</small></p>
                                        </div>
                                        <div className="col-3 text-warning">
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
=======
    <div className="container-xl">
        <main className="pt-5 mt-4">
            <div className="row">
                <div className="col-lg-4 ">
                    <div className="card text-center sticky-md-top profile-card ">
                        <div className="card-header bg-white">
                            <h1 className="mt-2"> {/*Sofía Aguilar*/ MentorP.nombrePerfil}</h1>
                        </div>
                        <div className="card-img mt-3">
                            <img src={imagen} className="rounded-circle w-50" alt="..." />
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-start mt-3">
                                <i className="fas fa-map-marked-alt icons-size me-md-2"></i>
                                <p className="text-start"> {/*Guadalajara, Jalisco*/ MentorP.locacionPerfil}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> {/*sa.aguilarvaldez@gmail.com*/ MentorP.emailPerfil}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> {/*¡Hola! Me llamo Sofía y estoy buscando un mentor para aprender matemáticas.*/ MentorP.presentacion}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 ">
                    <div className="card profile-card">
                        <div className="card-body" id="drop-description">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <AcordionItem numAcordion = "One" acorTitle="Sobre mí" mentorInformation = {MentorP.sobremi}/>
                                <AcordionItem numAcordion = "Two" acorTitle="Logros" mentorInformation = {MentorP.educacion}/>
                                <AcordionItem numAcordion = "Three" acorTitle="Intereses" mentorInformation = {MentorP.datosCuriosos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
>>>>>>> eb2bd00b1a827603005d3788ee921288b83c5c55
    );
}

export  {UserProfileInformation};