import React from 'react'
import '../Css/aboutUs.css'



const AboutUs = () => {

    const imageAbout = require.context('../global/assets/images', true);


    return (
        <div className='mt-3 pt-5'>
            {/* <!-- /Header --> */}

            {/* <!-- Start of Carousel--> */}
            <main id="main">
                <div className="container-xxl mb-5 pb-3">
                    <h2 className="text-center">Somos <strong> el vínculo </strong> entre mentores y estudiantes para facilitar el
                        intercambio de conocimientos.</h2>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={imageAbout('./about-us/avatar.png')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={imageAbout('./about-us/slide2.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={imageAbout('./about-us/slide3.jpg')} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </main>
            {/* <!--End of Carousel--> */}

            {/* <!-- mision vision valores --> */}
            <section id="valores" className="mt-5 text-center">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8">
                            <h2 className="py-5 ">Nuestra <strong>filosofía</strong></h2>
                            <p>En Mentoritos, buscamos crear oportunidades de aprendizaje con
                                horarios flexibles para personas que buscan compartir su conocimiento
                                y aprender en cualquier momento.
                                <br />
                                De estudiantes para estudiantes.
                            </p>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="container-xxl">
                    <h2 className="py-5">Nuestros <strong>valores</strong></h2>
                    <div className="row row-cols-1 row-cols-md-3 ">
                        <div className="col">
                            <div className="card h-100 color-border-card">
                                <img className="card-img-top" src={imageAbout('./about-us/community.svg')} alt="sans" />
                                <div className="card-body">
                                    <h3 className="card-title">Comunidad</h3>
                                    <p className="card-text">Ayudamos a formar relaciones que fomenten y te acompañen en tu
                                        aprendizaje.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 color-border-card">
                                <img className="card-img-top" src={imageAbout('./about-us/inclusion.svg')} alt="sans" />
                                <div className="card-body">
                                    <h3 className="card-title">Inclusión</h3>
                                    <p className="card-text">Creemos que todos somos iguales y tenemos la misma oportunidad de
                                        enseñar y aprender.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 color-border-card">
                                <img className="card-img-top my-4" src={imageAbout('./about-us/security.svg')}
                                    alt="security" />
                                <div className="card-body mt-4">
                                    <h3 className="card-title">Seguridad</h3>
                                    <p className="card-text">Nos importa que tus datos personales y las transacciones que realices
                                        sean seguras mediante la encriptación de datos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- mision vision valores --> */}

            {/* <!-- Inicio Cards de informacion personal --> */}
            <section id="cards-info-space" className="py-5 mt-5 espacio">
                <h2 className="text-center">Nuestro <strong>equipo</strong></h2>
                <div className="container-xxl text-white">
                    <div className="row text-center ms-5 py-4">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card img-fluid imagen espacio w-75 border-0">
                                <figure>
                                    <img className="card-img-top rounded-circle" src={imageAbout('./Rejina Rojí.png')}
                                        alt="" />
                                    <div className="card-img-overlay desaparece">
                                        <h4 className="card-title">Regina Rojí</h4>
                                        <p className="card-text">Java Fullstack Developer</p>
                                        <a href="#ReginaRoji" data-bs-toggle="modal" className="btn btn-dark">Ver más</a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card img-fluid imagen espacio w-75 border-0">
                                <figure>
                                    <img className="card-img-top rounded-circle"
                                        src={imageAbout('./Carolina Carrillo_Tierra..png')} alt=""
                                    />
                                    <div className="card-img-overlay desaparece">
                                        <h4 className="card-title">Carolina Carrillo</h4>
                                        <p className="card-text">Java Fullstack Developer</p>
                                        <a href="#CarolinaCarrillo" data-bs-toggle="modal" className="btn btn-dark">Ver más</a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card img-fluid imagen espacio w-75 border-0">
                                <figure>
                                    <img className="card-img-top rounded-circle"
                                        src={imageAbout('./Lilia Rabago Marte.png')} alt=""
                                    />
                                    <div className="card-img-overlay desaparece">
                                        <h4 className="card-title">Lilia Rabago</h4>
                                        <p className="card-text">Java Fullstack Developer</p>
                                        <a href="#LiliaRabago" data-bs-toggle="modal" className="btn btn-dark">Ver más</a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card img-fluid imagen espacio w-75 border-0">
                                <figure>
                                    <img className="card-img-top rounded-circle"
                                        src={imageAbout('./Jonathan Jimenez _ Jupiter.png')} alt=""
                                    />
                                    <div className="card-img-overlay desaparece">
                                        <h4 className="card-title">Jonathan Jimenez</h4>
                                        <p className="card-text">Java Fullstack Developer</p>
                                        <a href="#JonathanJimenez" data-bs-toggle="modal" className="btn btn-dark">Ver más</a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xxl text-white">
                    <div className="row text-center ms-5">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card img-fluid imagen espacio w-75 border-0">
                                <figure>
                                    <img className="card-img-top rounded-circle"
                                        src={imageAbout('./Jorge Mercado Encélado.png')} alt=""
                                    />
                                    <div className="card-img-overlay desaparece">
                                        <h4 className="card-title">Jorge Mercado</h4>
                                        <p className="card-text">Java Fullstack Developer</p>

                                        <a href="#JorgeMercado" data-bs-toggle="modal" className="btn btn-dark">Ver más</a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="card img-fluid imagen espacio w-75 border-0">
                                <figure>
                                    <img className="card-img-top rounded-circle"
                                        src={imageAbout('./Rosa Carrillo Saturno.png')} alt=""
                                    />
                                    <div className="card-img-overlay desaparece">
                                        <h4 className="card-title">Rosa Carrillo</h4>
                                        <p className="card-text">Java Fullstack Developer</p>
                                        <a href="#RosaCarrillo" data-bs-toggle="modal" className="btn btn-dark">Ver más</a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 taco">
                            <div className="card img-fluid imagen espacio w-75 border-0">
                                <figure>
                                    <img className="card-img-top rounded-circle"
                                        src={imageAbout('./Daniel Calamateo Urano.png')} alt=""
                                    />
                                    <div className="card-img-overlay desaparece">
                                        <h4 className="card-title">Daniel Calamateo</h4>
                                        <p className="card-text">Java Fullstack Developer</p>
                                        <a href="#DanielCalamateo" data-bs-toggle="modal" className="btn btn-dark">Ver más</a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 ">
                            <div className="card img-fluid imagen espacio w-75 border-0">
                                <figure>
                                    <img className="card-img-top rounded-circle"
                                        src={imageAbout('./Sofía Acosta Neptuno.png')} alt=""
                                    />
                                    <div className="card-img-overlay desaparece">
                                        <h4 className="card-title">Sofia Aguilar</h4>
                                        <p className="card-text">Java Fullstack Developer</p>
                                        <a href="#SofiaAcosta" data-bs-toggle="modal" className="btn btn-dark">Ver más</a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Fin de Cards de informacion personal --> */}

            {/* <!-- Inicio de Modal's --> */}
            <section>
                <div className="modal fade" id="JonathanJimenez" aria-labelledby="compraLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-opacity-50">
                            <div className="modal-header">
                                <div className="row ">
                                    <div className=" col-7">
                                        <img src={imageAbout('./Jonathan Jimenez _ Jupiter.png')} className="w-100"
                                            alt="" />
                                    </div>
                                    <div className="col-5 my-auto">
                                        <h2 className="h3">Jonathan Jimenez</h2>
                                        <p><small>
                                            Hola! soy Jonathan. Soy originario de la cuna de la torta de tamal y las
                                            quesadillas
                                            que no necesariamente tienen queso.
                                            <br /><br />
                                            Actualmente me dedico a ser el gran Tlatoani, protector de la plataforma
                                            Mentoritos.
                                            <br /><br />
                                            Mi pecado capital es: que amo jugar magic, lol y mobile legends,

                                        </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="JorgeMercado" aria-labelledby="compraLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-opacity-50">
                            <div className="modal-header">
                                <div className="row ">
                                    <div className=" col-7">
                                        <img src={imageAbout('./Jorge Mercado Encélado.png')} className="w-100" alt="" />
                                    </div>
                                    <div className="col-5 my-auto">
                                        <h2 className="h3">Jorge Mercado</h2>
                                        <p><small>Hola! Soy Jorge Mercado, antes de que preguntes, si.. soy Libra. Curioso por
                                            naturaleza y apasionado por aprender cosas nuevas.
                                            <br /><br />
                                            Actualmente me gusta estudiar programación y disfrutar de las cosas más simples
                                            de
                                            la vida.
                                            <br /><br />
                                            26 años y contando, originario de la tierra del tejuino, mi lema es “ La vida es
                                            un
                                            don.. Saber vivir es un arte”. </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="DanielCalamateo" aria-labelledby="compraLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-opacity-50">
                            <div className="modal-header">
                                <div className="row ">
                                    <div className=" col-7">
                                        <img src={imageAbout('./Daniel Calamateo Urano.png')} className="w-100" alt="" />
                                    </div>
                                    <div className="col-5 my-auto">
                                        <h2 className="h3">Daniel Calamateo</h2>
                                        <p><small>La mitad del mundo ya me conoce, la otra mitad me quiere conocer.
                                            Mi nombre es Daniel Calamateo.
                                            <br /><br />
                                            Odio muchas cosas y no me agrada alguna cosa en particular. No tengo un sueño
                                            porque
                                            lo convertiré en realidad.
                                            <br /><br />
                                            Voy a restaurar mi clan y matar una cierta persona. </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="LiliaRabago" aria-labelledby="compraLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-opacity-50">
                            <div className="modal-header">
                                <div className="row ">
                                    <div className=" col-7">
                                        <img src={imageAbout('./Lilia Rabago Marte.png')} className="w-100" alt="" />
                                    </div>
                                    <div className="col-5 my-auto">
                                        <h2 className="h3">Lilia Rabago</h2>
                                        <p><small>Hola! Soy Lily, tengo 27 años. Me encanta el orden y creo que en mi otra vida
                                            fuí
                                            una agenda.
                                            <br /><br />
                                            Soy una persona creativa y apasionada. Eso lo transmito en todo lo que hago.
                                            Mis pasatiempos son: tocar la guitarra y salir a pasear en bicicleta para calmar
                                            mi
                                            mente.
                                            <br /><br />
                                            Antes de convertirme en ninja no era nadie, pero nunca me rendí.
                                            <br /><br />
                                            Mi lema es: ¡No voy a salir corriendo, ni me retracto de lo que digo!
                                            Ese es mi nindo: Mi camino ninja!
                                        </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="CarolinaCarrillo" aria-labelledby="compraLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-opacity-50">
                            <div className="modal-header">
                                <div className="row ">
                                    <div className=" col-7">
                                        <img src={imageAbout('./Carolina Carrillo_Tierra..png')} className="w-100"
                                            alt="" />
                                    </div>
                                    <div className="col-5 my-auto">
                                        <h2 className="h3">Carolina Carrillo</h2>
                                        <p><small>Holaaa Soy Caro, tengo 26 años. Me encanta comer y hablar de comida. Soy
                                            Acuario o
                                            Capricornio según me convenga lo que diga el horóscopo.
                                            <br /><br />
                                            Me gusta hacer yoga porque relaja mi alma, mis pensamientos.Siempre trato de
                                            tomar
                                            todo lo bueno de cada situación y usarlo para mejorar.

                                            <br /><br />
                                            El lema de mi vida es: “El no ya lo tienes, hazlo posible!” </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="ReginaRoji" aria-labelledby="compraLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-opacity-50">
                            <div className="modal-header">
                                <div className="row ">
                                    <div className=" col-7">
                                        <img src={imageAbout('./Rejina Rojí.png')} className="w-100" alt="" />
                                    </div>
                                    <div className="col-5 my-auto">
                                        <h2 className="h3">Regina Rojí</h2>
                                        <p><small>¡Hola! Soy Regina, tengo 25 años. Me importa mi paz mental, así que no te
                                            metas
                                            conmigo (no es cierto, es bromita).
                                            <br /><br />
                                            En mis tiempos libres me gusta mucho salir a pasear y tocar el piano.
                                            Últimamente le
                                            agarré gusto al yoga aunque, si les soy sincera, apenas si me puedo tocar los
                                            pies.
                                            <br /><br />
                                            Me gusta trabajar en mi crecimiento personal y sigo trabajando en desdramatizar
                                            el
                                            fracaso y aplicar los 4 acuerdos en mi vida.


                                        </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="SofiaAcosta" aria-labelledby="compraLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-opacity-50">
                            <div className="modal-header">
                                <div className="row ">
                                    <div className=" col-7">
                                        <img src={imageAbout('./Sofía Acosta Neptuno.png')} className="w-100" alt="" />
                                    </div>
                                    <div className="col-5 my-auto">
                                        <h2 className="h3">Sofia Aguilar</h2>
                                        <p><small>Es difícil escribir quién soy porque siento que no soy. Ser es definir y yo no
                                            soy
                                            algo estático.
                                            <br /><br />
                                            Cómo protegerme de aquello que desconozco me supera. Por eso me esfuerzo, una y
                                            otra
                                            y otra vez, para dirigir
                                            mis esfuerzos hacia las manifestaciones de lo que quiero ser, para construir
                                            proyectos que puedan seguir el día que no esté.
                                            <br /><br />
                                            Uno de ellos al cual le tengo mucho cariño es Mentoritos. Me gusta pensar que
                                            ustedes le tienen cariño también.</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="RosaCarrillo" aria-labelledby="compraLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-opacity-50">
                            <div className="modal-header">
                                <div className="row ">
                                    <div className=" col-7">
                                        <img src={imageAbout('./Rosa Carrillo Saturno.png')} className="w-100" alt="" />
                                    </div>
                                    <div className="col-5 my-auto">
                                        <h2 className="h3">Rosa Carrillo</h2>
                                        <p><small>¡Hola, holaaa! Soy Rosy, tengo 27 años. Soy una chica super risueña y
                                            amiguera,
                                            creativa y entusiasta que siempre está buscando algo nuevo que aprender.
                                            Tu no estas para saberlo, ni yo para contártelo, pero el día que escuches mi
                                            voz..
                                            quedarás hipnotizado.
                                            <br /><br />
                                            No hay nada que me haga más feliz que pasar las tardes
                                            mirando un cielo estrellado junto al mar (océano), y si piensas que es un
                                            cliché, es
                                            más cliché que no salgas tú del antro feo ese al que siempre vas.
                                            <br /><br />
                                            Mi corazón está partido entre la tierra de las tortas de tamal y la tierra de
                                            las
                                            mariposas monarca. </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Fin de modal --> */}

            {/* <!-- Start of video-AboutUs section --> */}
            <section id="video-aboutUs" className="container-xxl py-5 mt-5">
                <h2 className="pb-5 text-center">Nuestra <strong>historia</strong></h2>
                {/* <!-- Background container of the video section --> */}
                <div className="">
                    <div className="c-card">
                        <div className="card-video">
                            <div className="card-video">
                                <div className="card-banner">
                                    <div className="background">
                                        <div className="c-backgorund">
                                            <div className="video-container pd-2">
                                                <div className="video ratio ratio-16x9">
                                                    <iframe className="container-xxl-fluid" width=" 660" height="415"
                                                        src="https://www.youtube.com/embed/w-PoV_sIWos"
                                                        title="YouTube video player" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="drop">
                                        <i className="fas fa-chevron-circle-down" id="button-drop"></i>
                                    </div>
                                </div>
                                <div className="card-description" id="drop-description">
                                    <div className="card-description-text">
                                        <h3>Mentoritos</h3>
                                        <p>Apasionados, soñadores, utópicos, compartidos, involucrados, serios, comprometidos,
                                            políglotas y siempre listos para la aventura.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- End of video-AboutUs section --> */}

            {/* <!--Start of Timeline--> */}
            <section id="timeline-aboutUs" className="timeline" style={{ marginBottom: "10rem" }}>
                <div className="container-xxl">
                    <div className="timeline-item">
                        <div className="point-line"></div>
                        <div className="timeline-content js--fadeInLeft">
                            <div className="date">29 NOV 2021</div>
                            <h3>Generation México</h3>
                            <p className="text-white">Nuestro equipo inició con una capacitación como Desarrollador Java Full Stack
                                donde comenzamos
                                nuestras bases para poder iniciar con "Mentoritos"</p>

                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="point-line"></div>
                        <div className="timeline-content  js--fadeInRight">
                            <div className="date">29 NOV 2021</div>
                            <div className="pt-3">
                                <h3>Habilidades Blandas</h3>
                            </div>
                            <p className="text-white">Desarrollamos nuestra comunicación con los demás para crear mejores relaciones
                                humanas y laborales.
                            </p>

                        </div>

                    </div>

                    <div className="timeline-item">
                        <div className="point-line"></div>
                        <div className="timeline-content js--fadeInLeft">
                            <div className="date">06 DIC 2021</div>
                            <div>
                                <h3>Programación Frontend</h3>
                            </div>
                            <p className="text-white">Creamos diseños agradables visualmente para que los usuarios de Mentoris
                                disfruten la experiencia
                                visual con nosotros.</p>

                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="point-line"></div>
                        <div className="timeline-content  js--fadeInRight">
                            <div className="pt-3">
                                <h3>Programación Backend</h3>
                            </div>
                            <div className="date">24 ENE 2022</div>
                            <p className="text-white">Manejamos operaciones con bases de datos y autenticación de usuarios, siempre
                                buscando nuevas ideas
                                para proteger a nuestros usuarios de Mentoris.</p>

                        </div>

                    </div>
                    <div className="timeline-item">
                        <div className="point-line"></div>
                        <div className="timeline-content js--fadeInLeft">
                            <div className="date">14 FEB 2022</div>
                            <div>
                                <h3>Arquitectura Web</h3>
                            </div>
                            <p className="text-white">Siempre buscando estructurar mejor nuestro código, separamos los archivos
                                respondiendo el dónde y
                                cómo los almacenamos. Pensamos que los cimientos son muy importantes para nuestra organización,
                                por
                                eso utilizamos una arquitectura basada en microservicios.</p>

                        </div>
                    </div>



                </div>
            </section>
            {/* <!--End of Timeline--> */}

            {/* <!-- contact form --> */}
            <section id="contact-form" className="space-between-sections">
                <div className="container-xxl">
                    <div className="row mb-5">
                        <div className="col">
                            <h2>Contacto</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mx-auto" style={{ width: "700px" }}>
                                <h3 className="text-center">Agradecemos tu tiempo para comunicarte con Mentoritos. ¿Cómo podemos
                                    ayudarte?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="mx-auto text-center" style={{ width: "700px" }}>
                                <form action="">
                                    <input className="my-4" type="text" placeholder="Nombre" name="name" required />
                                    <br />
                                    <input className="mb-4" type="text" placeholder="Apellido" name="last-name" required />
                                    <br />
                                    <input className="mb-4" type="email" placeholder="Correo" name="e-mail" required />
                                    <br />
                                    <textarea className="my-4" name="messsage" id="" cols="30" rows="5" placeholder="Mensaje"
                                        required></textarea>
                                    <br />
                                    <button type="submit" className="btn rounded-pill buttons">enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- contact form --> */}

            {/* <!-- footer --> */}
            <footer>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col py-5">
                            <br />
                            <a href="!#" className="mb-0 pt-5">Enseña con nosotros</a><br />
                            <a href="!#" className="mb-0">FAQ</a><br />
                            <a href="!#">Reportar malas prácticas</a>
                        </div>
                        <div className="col py-5">
                            <br />
                            <a href="!#" className="mb-0 pt-5">Enseña con nosotros</a><br />
                            <a href="!#" className="mb-0">FAQ</a><br />
                            <a href="!#">Reportar malas prácticas</a>
                        </div>
                        <div className="col py-5">
                            <br />
                            <a href="!#" className="mb-0 pt-5">Aviso de provacidad</a><br />
                            <a href="!#" className="mb-0">Términos y condiciones</a><br />
                        </div>
                        <div className="col py-5">
                            <br />
                            <a href="!#" className="mb-0 pt-5"><i className="fab fa-facebook-square"></i></a>
                            <a href="!#" className="mb-0"><i className="fab fa-instagram"></i></a>
                            <a href="!#"><i className="fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- footer --> */}

        </div>
    )
}

export default AboutUs