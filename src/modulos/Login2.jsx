import React from 'react'
import { auth, db } from '../firebase'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ingresoUsuarioAccion } from '../Redux/mentoritoDucks'
import '../Css/singUP.css'
import googleLogin from '../global/assets/images/signUp/btn_google_signin_dark_pressed_web.png'

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [ciudad, setCiudad] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [usuario, setUsuario] = React.useState('')



    const [esRegistro, setEsRegistro] = React.useState(false)
    React.useEffect(() => {
        console.log(props.login1);
        setEsRegistro(props.login1);
    }, [props.login1])

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
            props.history.push('/')
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
            await db.collection('usuario').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid
            })
            await db.collection(res.user.uid).add({
                firstName: nombre,
                lastName: apellido,
                city: ciudad,
                estate: estado,
                user: usuario
            })
            setEmail('')
            setPass('')
            setApellido('')
            setNombre('')
            setCiudad('')
            setEstado('')
            setUsuario('')
            setError(null)
            props.history.push('/')
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('Email no válido')
            }
            if (error.code === 'auth/email-already-in-use') {
                setError('Email ya utilizado')
            }
        }

    }, [email, pass, props.history, nombre, apellido, ciudad, estado, usuario])


    const dispatch = useDispatch()

    const loading = useSelector(store => store.usuario.loading)
    const activo = useSelector(store => store.usuario.activo)
    console.log(activo)

    React.useEffect(() => {
        // console.log(activo)
        if (activo) {
            props.history.push('/')
        }
    }, [activo, props.history])




    return (
        <div className="form-section">
            <div className="text-center container-xxl">
                {
                    esRegistro ? (<section className="form-section">
                        <div className="text-form">
                            <h2>Te damos la bienvenida a </h2>
                            <h1>Mentoritos</h1>
                            <p className='text-white'>Por favor llena los siguientes campos para crear tu cuenta.</p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 card py-5 px-4" style={{ backgroundColor: "beige" }}>
                                <div className="form-container ">
                                    <form className="needs-validation w-100" onSubmit={procesarDatos} >
                                        <div className="row">
                                            <div className="col-md-12">
                                                {
                                                    error ? (
                                                        <div className="alert alert-danger">
                                                            {error}
                                                        </div>
                                                    ) : null
                                                }
                                                <label htmlFor="validationTooltip01">Nombre</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-input"
                                                    id="validationTooltip01"
                                                    placeholder="Nombre"
                                                    onChange={e => setNombre(e.target.value)}
                                                    value={nombre} />
                                                <div className="valid-tooltip">
                                                    ¡Se ve bien!
                                                </div>
                                                <label htmlFor="validationTooltip02">Apellido</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-input"
                                                    id="validationTooltip02"
                                                    placeholder="Apellido"
                                                    onChange={e => setApellido(e.target.value)}
                                                    value={apellido} />
                                                <div className="valid-tooltip">
                                                    ¡Se ve bien!
                                                </div>

                                                <label htmlFor="validationTooltipUsername">Nombre de usuario</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control form-input"
                                                        id="validationTooltipUsername"
                                                        placeholder="Usuario"
                                                        onChange={e => setUsuario(e.target.value)}
                                                        value={usuario} />
                                                    <div className="invalid-tooltip">
                                                        Por favor elige otro usuario
                                                    </div>
                                                </div>

                                                <label htmlFor="validationTooltip03">Ciudad</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-input"
                                                    id="validationTooltip03"
                                                    placeholder="Ciudad"
                                                    onChange={e => setCiudad(e.target.value)}
                                                    value={ciudad}
                                                />
                                                <div className="invalid-tooltip">
                                                    El nombre de la ciudad es invalido. Prueba otra vez.
                                                </div>

                                                <label htmlFor="validationTooltip04">Estado</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-input"
                                                    id="validationTooltip04"
                                                    placeholder="Estado"
                                                    onChange={e => setEstado(e.target.value)}
                                                    value={estado}
                                                />
                                                <div className="invalid-tooltip">
                                                    Por favor introduce un estado valido.
                                                </div>

                                                <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                                                <input
                                                    type="email"
                                                    className="form-control form-input mb-2"
                                                    placeholder="Ingrese Email"
                                                    onChange={e => setEmail(e.target.value)}
                                                    value={email}
                                                />
                                                <div>
                                                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                                                    <input
                                                        type="password"
                                                        className="form-control form-input mb-2"
                                                        placeholder="Ingrese Contraseña"
                                                        onChange={e => setPass(e.target.value)}
                                                        value={pass}
                                                    />
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input " id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Acepto términos y
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
                                                <button
                                                    className="btn"
                                                    onClick={() => dispatch(ingresoUsuarioAccion())}
                                                    disabled={loading}
                                                >
                                                    <img src={googleLogin} alt="" />
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
                                    {/* <div className="col form-img" className="">
                                    <img src="../../global/assets/images/signUp/onlineclass.svg" className="form-img" alt="mentorito" />
                                </div> */}

                                </div>
                            </div>
                        </div>
                    </section>)
                        :
                        (
                            <section className="form-section">
                                <div className="text-form">
                                    <h2>Te damos la bienvenida a </h2>
                                    <h1>Mentoritos</h1>
                                    <p className='text-white'>Por favor llena los siguientes campos.</p>
                                </div>


                                <div className="row justify-content-center">
                                    <div className="col-md-6 card py-5 px-4" style={{ backgroundColor: "beige" }}>
                                        <div className="form-container ">
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
                                                    className="btn"
                                                    onClick={() => dispatch(ingresoUsuarioAccion())}
                                                    disabled={loading}
                                                >
                                                    <img src={googleLogin} alt="" />
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