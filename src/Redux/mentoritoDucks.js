//import { Provider } from "react-redux";
import { auth, firebase, storage, db } from "../firebase";



//Data inicial
const dataInicial = {
    loading: false,
    activo: false
}//data inicial

//Types
const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'
const USUARIO_EXITO = 'USUARIO_EXITO'
const CERRAR_SESION = 'CERRAR_SESION'

//Reducer
export default function usuarioReducer(state = dataInicial, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case USUARIO_ERROR:
            return { ...dataInicial }
        case USUARIO_EXITO:
            return { ...state, loading: false, user: action.payload, action: true }
        case CERRAR_SESION:
            return { ...dataInicial }
        default:
            return { ...state }
    }//switch
}//usuarioReducer

//action
export const ingresoUsuarioAccion = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {

        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)

        console.log(res.user)

        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
            nombre: res.user.displayName,
            fotoURL: res.user.photoURL
        }//usuario

        //se guardaran los datos relacionados con el inicio de sesion
        const usuarioDB = await db.collection('usuarios').doc(usuario.email).get()
        console.log(usuarioDB)
        if (usuarioDB.exists) {
            // cuando existe el usuario en firestore
            dispatch({
                type: USUARIO_EXITO,
                payload: usuarioDB.data()
            })

            const datas = {
                email: res.user.email,
                uid: res.user.uid,
                url_Imagen: res.user.photoURL,
            };



            localStorage.setItem('usuario', JSON.stringify(usuarioDB.data()))
            localStorage.setItem('usuario', JSON.stringify(datas))
        } else {
            // no existe el usuario en firestore

            const datas = {
                email: res.user.email,
                uid: res.user.uid,
                url_Imagen: res.user.photoURL
            };

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(datas);

            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            fetch("http://localhost:8080/api/users/", requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));





            await db.collection('usuarios').doc(usuario.email).set(usuario)
            dispatch({
                type: USUARIO_EXITO,
                payload: usuario
            })
            localStorage.setItem('usuario', JSON.stringify(usuario))
            localStorage.setItem('usuario', JSON.stringify(datas))

        }

    } catch (error) {
        console.log(error)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}


//Aqui se leera la informacion del usuario
export const leerUsuarioActivoAccion = () => (dispatch) => {
    //leer la informacion en almacenamiento local
    if (localStorage.getItem('usuario')) {
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })//dispatch
    }//if
}//leerUsuarioActivoAccion

//Cerrar la sesion
export const cerrarSesionAccion = () => (dispatch) => {
    auth.signOut()
    dispatch({
        type: CERRAR_SESION
    })
    localStorage.removeItem('usuario')
}

//Actualizar datos
export const actualizarUsuarioAccion = (nombreActualizado) => async (dispatch, getState) => {
    dispatch({
        tipe: LOADING
    })//dispatch

    const { user } = getState().usuario
    console.log(user)

    try {
        await db.collection('usuario').doc(user.uid).update({
            nombre: nombreActualizado
        })

        const usuario = {
            ...user,
            nombre: nombreActualizado
        }//usuario

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }//try 
    catch (error) {
        console.log(error)
    }//catch

}//actualizarUsuarioAccion

//Editar foto de perfil
export const editarFotoAccion = (imagenEditada) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    })
    const { user } = getState().usuario
    console.log(user)

    try {
        const imagenRef = await storage.ref().child(user.uid).child('foto perfil')
        await imagenRef.put(imagenEditada)
        const imagenURL = await imagenRef.getDownloadURL()

        await db.collection(user.uid).doc(user.uid).update({
            fotoURL: imagenURL
        })

        const usuario = {
            ...user,
            fotoURL: imagenURL
        }//usuario

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })//dispatch

        localStorage.setItem('usuario', JSON.stringify(usuario))
    }//try 
    catch (error) {
        console.log(error)
    }//catch

}//editarFotoAccion