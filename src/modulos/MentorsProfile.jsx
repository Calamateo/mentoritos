import { Link } from 'react-router-dom'
/*import '../Css/mentorsProfile.css'*/
import { AcordionItem } from './mentorsProfileModules/AcordionItem'
import { Modal } from './mentorsProfileModules/EditarModal'

const MentorsProfileModule = ({ mentorProfileInformationParameter, setMentorProfileFunction }) => {
    // const imageMentor = require.context('../global/assets/images', true);
    // const imageAbout = require.context('../global/assets/images', true);

    let myProfile = false;

    return (
        <div className="container-xxl">
            <main className="pt-5 mt-5">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="card text-center sticky-md-top profile-card ">
                            <div className="card-header bg-white">
                                <h2 className="mt-2">Luis Carrillo</h2>
                            </div>
                            <div className="card-img mt-3">
                                <img src="https://images.pexels.com/photos/953703/pexels-photo-953703.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="rounded-circle w-50" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <p> Música</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn btn-sm rounded-pill me-md-2" type="submit">En línea</button>
                                </div>
                                <div className="justify-content-center mt-3">
                                    <p>Guadalajara, Jalisco</p>
                                    <p>Costo por hora: $150</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 ">
                        <div className="card profile-card">
                            <div className="card-header text-center mt-3 bg-white">
                                <div className="video-container pd-2">
                                    <div className="video ratio ratio-16x9">

                                        <iframe className="container-xxl-fluid" width="660" height="415" src="https://www.youtube.com/embed/_KFsJvgPfHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                        </iframe>

                                    </div>
                                </div>
                                {
                                    myProfile ?
                                        (<button type="button" class="btn btn-outline-success rounded-pill my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Editar Perfil
                                        </button>) :
                                        (<Link to="/ShoppingCar" className="btn btn-primary buttons rounded-pill mt-3">Reservar clase</Link>)
                                }
                            </div>
                            <Modal mentorprofileInformation={mentorProfileInformationParameter} setMentorProfile={setMentorProfileFunction} />{/*modal*/}

                            <div className="card-body" id="drop-description">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <AcordionItem numAcordion="One" acorTitle="Sobre mí" mentorInformation={mentorProfileInformationParameter.sobremi} />
                                    <AcordionItem numAcordion="Two" acorTitle="Educación" mentorInformation={mentorProfileInformationParameter.educacion} />
                                    <AcordionItem numAcordion="Three" acorTitle="Datos curiosos" mentorInformation={mentorProfileInformationParameter.datosCuriosos} />
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