import React from 'react'
/*import '../Css/mentorsProfile.css'*/
import {AcordionItem} from './AcordionItem'

const UserProfileInformation = ({mentorP}) =>{
const imageAbout = require.context('../global/assets/images', true);
const sofi = require.context('../global/assets/images', true);

    return (    
        
        <div className="container-xl">
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
                        
                        <div>
                            <button className="btn btn-outline-success rounded-pill me-1" type="submit">Seguir
                            </button>
                            <button type="button" className="btn btn-sm rounded-pill me-md-2">
                                <i className="far fa-heart profile-icons icons-size"></i>
                            </button>
                            <button type="button" className="btn btn-sm rounded-pill me-md-2">
                                <i className="fas fa-share profile-icons icons-size"></i>
                            </button>
                            <button className="btn dropdown-toggle btn-sm rounded-pill" type="button"
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-ellipsis-h profile-icons icons-size"></i>
                            </button>
                            <ul id="dropdown" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Reportar</a></li>
                            </ul>
                        </div>      
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
                            <AcordionItem numAcordion = "One" acorTitle="Sobre mí" mentorInformation = {mentorP.sobremi}/>
                            <AcordionItem numAcordion = "Two" acorTitle="Logros" mentorInformation = {mentorP.educacion}/>
                            <AcordionItem numAcordion = "Three" acorTitle="Intereses" mentorInformation = {mentorP.datosCuriosos}/>
                        </div>
                        
                        {/*<!-- Photo Gallery-->*/}
                <div id="carouselExampleControls" class="carousel slide mt-3 style-border" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        {/*<!-- Each carousel-item has 4 cards w/zoomed in images -->*/}
                        <div class="carousel-item active">
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*{/*<img class="card-img-top"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
    alt="Card image cap">*/}
                                    {/*<img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />*/}
                                </div>
                            </div>
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*{/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*{/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}            
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*{/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}            
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*{/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}    
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}            
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}        
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />    
                                </div>
                            </div>
                            <div class="col-md-3" style={{float:"left"}}>
                                <div class="card mb-2">
                                    {/*<img class="card-img-top"
                                        src="https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="Card image cap">*/}            
                                    <img src={imageAbout('./about-us/avatar.png')} className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                {/*<!-- \Photo Gallery-->*/}

                {/*<!-- Statistics -->*/}
                <div class="card mt-3 profile-card style-border">
                    <div class="header stat-bg pb-8 pt-5 pt-md-8">
                        <div class="container-fluid pb-5">
                            <h2 class="mb-5 stat-header">Estadísticas</h2>
                            <div class="header-body">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6">
                                        <div class="card card-stats mb-4 mb-xl-0 profile-card">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col">
                                                        <h5 class="card-title text-uppercase text-black mb-0">
                                                            Clases
                                                        </h5>
                                                        <span class="h2 font-weight-bold mb-0 text-black">350,897</span>
                                                    </div>
                                                    <div class="col-auto">
                                                        <div class="stat-size text-success"><i class="fas fa-book"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="mt-3 mb-0 text-black text-sm">
                                                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i>
                                                        3.48%</span>
                                                    <span class="text-nowrap">Ene - Feb</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6">
                                        <div class="card card-stats mb-4 mb-xl-0 profile-card">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col">
                                                        <h5 class="card-title text-uppercase text-black mb-0">Asistencia
                                                        </h5>
                                                        <span class="h2 font-weight-bold mb-0 text-black">2,356</span>
                                                    </div>
                                                    <div class="col-auto">
                                                        <div class="stat-size text-danger">
                                                            <i class="fas fa-chalkboard-teacher"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="mt-3 mb-0 text-black text-sm">
                                                    <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i>
                                                        3.48%</span>
                                                    <span class="text-nowrap">Ene - Feb</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Page content -->*/}
                </div>
                {/*<!-- Statistics -->*/}
                        
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

export  {UserProfileInformation};