import React from 'react'
import { AcordionItem } from './AcordionItem'


const MentorsProfileModule = ({ mentorP }) => {
    const imageAbout = require.context('../global/assets/images', true);

    const isMyProfile = true;

    return (

        <div className="container-xl">
            <main className="pt-5 mt-5">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="card text-center sticky-md-top profile-card ">
                            <div className="card-header bg-white">
                                <h1 className="mt-2">Merida Valiente</h1>
                            </div>
                            <div className="card-img mt-3">
                                <img src={imageAbout('./about-us/avatar.png')} className="rounded-circle w-50" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    {/*<i className="fa-solid fa-meteor me-md-2"></i>*/}
                                    <h4 className='fw-bold'> Matemáticas</h4>
                                </div>
                                <div className="d-flex justify-content-center mt-1 mb-4 ">
                                    <span className="me-md-4">Presencial</span>
                                    <span className="me-md-2">Online</span>
                                </div>
                                <div className="d-flex justify-content-start mt-3">
                                    <i className="fas fa-map-marked-alt icons-size me-md-2"></i>
                                    <p className="text-start">Guadalajara, Jalisco</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Duración de la clase:</p>
                                    <p>1 hr</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Costo por hora:</p>
                                    <p>$200</p>
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
                                {
                                    //console.log(props.firebaseUser)
                                }
                                {
                                    
                                    isMyProfile ? 
                                    (<button type="button" className="btn btn-outline-success rounded-pill my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Editar Perfil
                                    </button>)
                                    :
                                    (<button type="button" className="btn btn-outline-success rounded-pill my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Reservar clase
                                    </button>)
                                }

                            </div>

                            <div className="card-body" id="drop-description">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <AcordionItem numAcordion="One" acorTitle="Sobre mí" mentorInformation={mentorP.sobremi} />
                                    <AcordionItem numAcordion="Two" acorTitle="Educación" mentorInformation={mentorP.educacion} />
                                    <AcordionItem numAcordion="Three" acorTitle="Datos curiosos" mentorInformation={mentorP.datosCuriosos} />
                                </div>




                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
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
    );
}

export { MentorsProfileModule };