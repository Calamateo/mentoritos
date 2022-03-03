import React from 'react'
/*import '../Css/mentorsProfile.css'*/
import { AcordionItem } from './mentorsProfileModules/AcordionItem'; 
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";


const UserProfileInformation = ({mentorP}) =>{
    <Router></Router>
//     const {userId}=useParams();
//    userId
const imageProfile = require.context('../global/assets/images', true);
const [MentorP] = React.useState(mentorP);
  
    let imagen = imageProfile(`${MentorP.imagePerfil}`)
    return (    
        
        <div className="container-xxl mt-5">
            <main className="pt-3 mt-5">
                <div className="row mt-5">
                    <div className="col-lg-4 ">
                        <div className="card text-center sticky-md-top profile-card ">
                            <div className="card-header bg-white">
                                <h2 className="mt-2"> {/*Sofía Aguilar*/ MentorP.nombrePerfil}</h2>
                            </div>
                            <div className="card-img mt-2">
                                <img src={imagen} className="rounded-circle w-50" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-start mt-2">
                                    <i className="fas fa-map-marked-alt icons-size me-md-2"></i>
                                    <p className="text-start"> {/*Guadalajara, Jalisco*/ MentorP.locacionPerfil}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>{/*sa.aguilarvaldez@gmail.com*/ MentorP.emailPerfil}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p> {/*¡Hola! Me llamo Sofía y estoy buscando un mentor para aprender matemáticas.*/ MentorP.presentacion}</p>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="col-lg-8 ">
                        <div className="card profile-card mb-4 p-2">
                            <h3>Sobre mí</h3>
                            <p>{mentorP.sobremi}</p>
                        </div>
                        <div className="card profile-card mb-4 p-2">
                            <h3>Educación</h3>
                            <p>{mentorP.educacion}</p>
                        </div>
                        <div className="card profile-card mb-4 p-2">
                            <h3>Datos curiosos</h3>
                            <p>{mentorP.datosCuriosos}</p>
                        </div>
                        {/* <AcordionItem numAcordion="One" acorTitle="Sobre mí" mentorInformation={mentorP.sobremi} /> 
                            <AcordionItem numAcordion="Two" acorTitle="Logros" mentorInformation={mentorP.educacion} /> 
                            <AcordionItem numAcordion="Three" acorTitle="Intereses" mentorInformation={mentorP.datosCuriosos} />
                        */}
                    </div>
                </div>
            </main>
        </div>
    );
}
       
export  {UserProfileInformation};