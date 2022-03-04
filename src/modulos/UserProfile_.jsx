import { Link } from 'react-router-dom'
/*import '../Css/mentorsProfile.css'*/
import { AcordionItem } from './mentorsProfileModules/AcordionItem'
import { Modal } from './mentorsProfileModules/EditarModal'

const MentorsProfileOwn = ({ mentorProfileInformationParameter, setMentorProfileFunction }) => {
    const imageMentor = require.context('../global/assets/images', true);
    //const imageAbout = require.context('../global/assets/images', true);
    let myProfile = true;

    return (
        <div className="container-xxl">
            <main className="pt-5 mt-5">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="card text-center sticky-md-top profile-card ">
                            <div className="card-header bg-white">
                                <h2 className="mt-2">Sofía Aguilar</h2>
                            </div>
                            <div className="card-img mt-3">
                                <img src={imageMentor('./Sofía Acosta Neptuno.png')} className="rounded-circle w-50" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className="justify-content-center mt-3">
                                    <p>Guadalajara, Jalisco</p>
                                    <p>sofia@gmail.com</p>
                                    <p>¡Hola! Mi nombre es Sofía, me encantaría aprender matemáticas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 ">
                        <div className="card profile-card">

                            <Modal mentorprofileInformation={mentorProfileInformationParameter} setMentorProfile={setMentorProfileFunction} />{/*modal*/}

                            <div className="card-body" id="drop-description">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <AcordionItem numAcordion="One" acorTitle="Sobre mí" mentorInformation={mentorProfileInformationParameter.sobremi} />
                                    <AcordionItem numAcordion="Two" acorTitle="Educación" mentorInformation={mentorProfileInformationParameter.educacion} />
                                    <AcordionItem numAcordion="Three" acorTitle="Datos curiosos" mentorInformation={mentorProfileInformationParameter.datosCuriosos} />
                                </div>
                                <div className="card-header text-center mt-3 bg-white">
                                    {
                                        myProfile ?
                                            (<button type="button" class="btn btn-outline-success rounded-pill my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Editar Perfil
                                            </button>) :
                                            (<Link to="/ShoppingCar" className="btn btn-primary buttons rounded-pill mt-3">Reservar clase</Link>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { MentorsProfileOwn };