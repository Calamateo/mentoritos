import React from 'react'
import { auth, db } from '../firebase'
import { withRouter } from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const [esRegistro, setEsRegistro] = React.useState(false)

    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim() || !pass.trim()) {
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        if (!pass.trim()) {
            console.log('Datos vacíos pass!')
            setError('Datos vacíos pass!')
            return
        }
        if (pass.length < 6) {
            console.log('6 o más carácteres')
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)

        if (esRegistro) {
            registrar()
        } else {
            login()
        }

    }

    const login = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/admin')
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('Email no válido')
            }
            if (error.code === 'auth/user-not-found') {
                setError('Email no registrado')
            }
            if (error.code === 'auth/wrong-password') {
                setError('Contraseña incorrecta')
            }
        }
    }, [email, pass, props.history])

    const registrar = React.useCallback(async () => {

        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)
            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid
            })
            await db.collection(res.user.uid).add({
                name: 'Tarea de ejemplo',
                fecha: Date.now()
            })
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/admin')
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('Email no válido')
            }
            if (error.code === 'auth/email-already-in-use') {
                setError('Email ya utilizado')
            }
        }

    }, [email, pass, props.history])

    return (
        <div className="form-section">
            <div className="text-center container-xxl">
                {
                    esRegistro ? (<section class="form-section">
                        <div class="text-form">
                            <h2>Te damos la bienvenida a </h2>
                            <h1>Mentoritos</h1>
                            <p className='text-white'>Por favor llena los siguientes campos para crear tu cuenta.</p>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-6 card py-5 px-4" style={{ backgroundColor: "beige" }}>
                                <div class="form-container ">
                                    <form class="needs-validation w-100" novalidate>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label for="validationTooltip01">Nombre</label>
                                                <input type="text" class="form-control form-input" id="validationTooltip01"
                                                    placeholder="Nombre" required />
                                                <div class="valid-tooltip">
                                                    ¡Se ve bien!
                                                </div>

                                                <label for="validationTooltip02">Apellido</label>
                                                <input type="text" class="form-control form-input" id="validationTooltip02"
                                                    placeholder="Apellido" required />
                                                <div class="valid-tooltip">
                                                    ¡Se ve bien!
                                                </div>

                                                <label for="validationTooltipUsername">Nombre de usuario</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                    </div>
                                                    <input type="text" class="form-control form-input" id="validationTooltipUsername"
                                                        placeholder="Usuario" aria-describedby="validationTooltipUsernamePrepend" required />
                                                    <div class="invalid-tooltip">
                                                        Por favor elige otro usuario
                                                    </div>
                                                </div>

                                                <label for="validationTooltip03">Ciudad</label>
                                                <input type="text" class="form-control form-input" id="validationTooltip03"
                                                    placeholder="Ciudad" required />
                                                <div class="invalid-tooltip">
                                                    El nombre de la ciudad es invalido. Prueba otra vez.
                                                </div>

                                                <label for="validationTooltip04">Estado</label>
                                                <input type="text" class="form-control form-input" id="validationTooltip04"
                                                    placeholder="Estado" required />
                                                <div class="invalid-tooltip">
                                                    Por favor introduce un estado valido.
                                                </div>

                                                <label for="exampleInputEmail1">Correo electrónico</label>
                                                <input type="email" class="form-control form-input" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" placeholder="Introduce tu correo electrónico" />
                                                <small id="emailHelp" class="form-text text-muted">No compartiremos tu correo con nadie
                                                    más.</small>

                                                <div>
                                                    <label for="exampleInputPassword1">Contraseña</label>
                                                    <input type="password" class="form-control form-input" id="exampleInputPassword1"
                                                        placeholder="Contraseña" />
                                                </div>
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input " id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Acepto términos y
                                                        condiciones</label>
                                                </div>
                                                <button
                                                    className="btn btn-dark me-1"
                                                    type="submit"
                                                >
                                                    {esRegistro ? 'Registrar' : 'Acceder'}
                                                </button>
                                                <button
                                                    className="btn btn-info me-1 "
                                                    type="button"
                                                    onClick={() => setEsRegistro(!esRegistro)}
                                                >
                                                    {esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
                                                </button>
                                                {
                                                    !esRegistro ? (
                                                        <button
                                                            className="btn btn-danger mx-auto"
                                                            type="button"
                                                            onClick={() => props.history.push('/reset')}
                                                        >
                                                            Recuperar contraseña
                                                        </button>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                    </form>
                                    {/* <div class="col form-img" class="">
                                    <img src="../../global/assets/images/signUp/onlineclass.svg" class="form-img" alt="mentorito" />
                                </div> */}

                                </div>
                            </div>
                        </div>
                    </section>)
                        :
                        (
                            <section class="form-section">
                                <div class="text-form">
                                    <h2>Te damos la bienvenida a </h2>
                                    <h1>Mentoritos</h1>
                                    <p className='text-white'>Por favor llena los siguientes campos.</p>
                                </div>


                                <div class="row justify-content-center">
                                    <div class="col-md-6 card py-5 px-4" style={{ backgroundColor: "beige" }}>
                                        <div class="form-container ">
                                            <form onSubmit={procesarDatos}>
                                                {
                                                    error ? (
                                                        <div className="alert alert-danger">
                                                            {error}
                                                        </div>
                                                    ) : null
                                                }
                                                <input
                                                    type="email"
                                                    className="form-control mb-2"
                                                    placeholder="Ingrese Email"
                                                    onChange={e => setEmail(e.target.value)}
                                                    value={email}
                                                />
                                                <input
                                                    type="password"
                                                    className="form-control mb-2"
                                                    placeholder="Ingrese Contraseña"
                                                    onChange={e => setPass(e.target.value)}
                                                    value={pass}
                                                />
                                                <button
                                                    className="btn btn-dark me-1"
                                                    type="submit"
                                                >
                                                    {esRegistro ? 'Registrar' : 'Acceder'}
                                                </button>
                                                <button
                                                    className="btn btn-info me-1 "
                                                    type="button"
                                                    onClick={() => setEsRegistro(!esRegistro)}
                                                >
                                                    {esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
                                                </button>
                                                {
                                                    !esRegistro ? (
                                                        <button
                                                            className="btn btn-danger mx-auto"
                                                            type="button"
                                                            onClick={() => props.history.push('/reset')}
                                                        >
                                                            Recuperar contraseña
                                                        </button>
                                                    ) : null
                                                }
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                }
            </div>

            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">

                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)