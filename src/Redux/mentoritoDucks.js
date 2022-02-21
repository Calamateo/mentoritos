import { Provider } from "react-redux";
import { auth, firebase, storage, db } from "../firebase";


//Data inicial
const dataInicial = {
    loading: false,
    activo: false
}//data inicial

//Types
const LOADING ='LOADING'
const USUARIO_ERROR ='USUARIO_ERROR'
const USUARO_EXITO ='USUARO_EXITO'
const CERRAR_SESION ='CERRAR_SESION'

//Reducer
export default function usuarioReducer (state=dataInicial, action){
    switch (action.type) {
        case LOADING:
            return{...state,loading:true}
        case USUARIO_ERROR:
            return{...dataInicial}
        case USUARO_EXITO:
            return{...state,loading:false, user:action.payload, action:true}
        case CERRAR_SESION:
            return{...dataInicial}
        default:
            return{...state}
    }//switch
}//usuarioReducer

//action
export const ingresoUsuarioAccion =() => async (dispatch,props) => {
    dispatch({
        type: LOADING
    })//Dispatch
    try {
        //se accede a los servicios de Google
        const provider = new firebase.auth.GoogleAuthProvider();
        //aqui genera un Popup para ingresar por medio de google
        const res = await auth.signInWithPopup(provider);

        //aqui se crea el objeto para guardar datos

        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
            nombre: res.user.displayName,
            fotoURL: res.user.photoURL
        }//usuario
        
        //se guardaran los datos relacionados con el inicio de sesion
        const usuarioDB = await db.collection('usuarios').doc(usuario.uid).get()
        console.log(usuarioDB)
        if (usuarioDB.exists) {
            //Cuando el usuario exista en firebase
            dispatch({
                type: USUARO_EXITO,
                payload: usuarioDB.data()

            })
            
            localStorage.setItem('usuario',JSON.stringify(usuarioDB.data()))
        }//if
        else{
            //No existe usuario en firebase
            await db.collection('usuario').doc(usuario.uid).set(usuario)
            dispatch({
                type:USUARO_EXITO,
                payload: usuario,
                
            })
            const foto = usuario.fotoURL 
            const nombrePerfil = usuario.nombre
            await db.collection(res.user.uid).doc(usuario.uid).set({
                fotoPerfil: foto,
                nombrePerfil: nombrePerfil,
                sobreMi:"",
                educacion:"",
                datosCuriosos: "",
                duracionClase: "",
                costoClase:"",
                materia: "",
                videoURL: "https://youtu.be/5p2hwlq341Y"

            })
            localStorage.setItem('usuario',JSON.stringify(usuario))
        }//else

    }// try 
    catch (error) {
        console.log(error)
        dispatch({
            type:USUARIO_ERROR
        })
    }//catch
}//ingresaUsuarioAccion


//Aqui se leera la informacion del usuario
export const leerUsuarioActivoAccion = () => (dispatch) =>{
    //leer la informacion en almacenamiento local
    if(localStorage.getItem('usuario')){
        dispatch({
            type:USUARO_EXITO,
            payload:JSON.parse(localStorage.getItem('usuario'))
        })//dispatch
    }//if
}//leerUsuarioActivoAccion

//Cerrar la sesion
export const cerrarSesionAccion = () => (dispatch) => {
    auth.signOut()
    localStorage.removeItem('usuario')
    dispatch({
        type:CERRAR_SESION
    })//Dispatch
}//cerrarSesionAccion 

//Actualizar datos
export const actualizarUsuarioAccion = (nombreActualizado) => async (dispatch,getState) => {
    dispatch({
        tipe:LOADING
    })//dispatch

    const {user} = getState().usuario
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
            type:USUARO_EXITO,
            payload: usuario
        })
        localStorage.setItem('usuario',JSON.stringify(usuario))
    }//try 
    catch (error) {
        console.log(error)        
    }//catch

}//actualizarUsuarioAccion

//Editar foto de perfil
export const editarFotoAccion = (imagenEditada) => async (dispatch, getState) =>{
    dispatch({
        type:LOADING
    })
    const {user} = getState().usuario
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
            type:USUARO_EXITO,
            payload: usuario
        })//dispatch

        localStorage.setItem('usuario',JSON.stringify(usuario))
    }//try 
    catch (error) {
        console.log(error)
    }//catch

}//editarFotoAccion