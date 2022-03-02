import React from 'react'
/*import '../Css/mentorsProfile.css'*/
import {AcordionItem} from './mentorsProfileModules/AcordionItem'
import { Modal } from './mentorsProfileModules/EditarModal'
import { Modalpruebacaro } from './mentorsProfileModules/modalprueba'

const MentorsProfileModule = ({mentorProfileInformationParameter, setMentorProfileFunction}) =>{
    const imageMentor = require.context('../global/assets/images', true);
    const imageAbout = require.context('../global/assets/images', true);

    return (    
<<<<<<< HEAD
        
        
=======
>>>>>>> 0fbb75286e6468d0021adcbf818f555ed57a6152
        <div className="container-xxl">
        <main className="pt-5 mt-5">
        <div className="row">
            <div className="col-lg-4 ">
                <div className="card text-center sticky-md-top profile-card ">
                    <div className="card-header bg-white">
                        <h2 className="mt-2">Carolina Carrillo</h2>
                    </div>
                    <div className="card-img mt-3">
                        <img src={imageMentor('./Carolina Carrillo_Tierra..png')} className="rounded-circle w-50" alt="..." />
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-center">
                            <p> Matemáticas</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-sm rounded-pill me-md-2" type="submit">Presencial</button>
                            <button className="btn btn btn-sm rounded-pill me-md-2" type="submit">Online</button>
                        </div>
                        <div className="justify-content-center mt-3">
                            <p>Guadalajara, Jalisco</p>
                            <p>Costo por hora: $200</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 ">
                <div className="card profile-card">
                    <div className="card-header text-center mt-3 bg-white">
                    <div className="video-container pd-2">
                        <div className="video ratio ratio-16x9">
                            <iframe className="container-xxl-fluid" width=" 660" height="415"
                                src="https://www.youtube.com/embed/5p2hwlq341Y" title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                                <button type="button" class="btn btn-outline-success rounded-pill my-3" data-bs-toggle="modal" data-bs-target="#modaltestcaro">
                                    Editar Perfil
                                </button>
                            </div>

                            <Modalpruebacaro/>

                            <Modal mentorprofileInformation = {mentorProfileInformationParameter} setMentorProfile={setMentorProfileFunction}/>{/*modal*/}

                            <div className="card-body" id="drop-description">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <AcordionItem numAcordion="One" acorTitle="Sobre mí" mentorInformation={mentorProfileInformationParameter.sobremi} />
                                    <AcordionItem numAcordion="Two" acorTitle="Educación" mentorInformation={mentorProfileInformationParameter.educacion} />
                                    <AcordionItem numAcordion="Three" acorTitle="Datos curiosos" mentorInformation={mentorProfileInformationParameter.datosCuriosos} />
                                </div>


                               

                                
                        
                        <div id='calendar'></div>
                        <div className="card-footer">
                            <h2 className="mb-3">Comentarios</h2>
                            <div className="row">
                                <div className="col-3">
                                <img src={imageAbout('./about-us/avatar.png')} className="rounded-circle" style={{width:"100px"}}  alt="..." />
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
                                    <img src={imageAbout('./about-us/avatar.png')} className="rounded-circle" style={{width:"100px"}}  alt="..." />
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
    );
}

export  {MentorsProfileModule};