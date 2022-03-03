import { BrowserRouter as Router, useParams } from "react-router-dom";
import { UserProfileInformation } from "./UserProfile";
import { MentorsProfileModule } from "./MentorsProfile";
import React from "react";

const UrlDynamic= (props) =>{
    <Router></Router>
const {userId}=useParams();
const {typeP}=useParams();
const [user,setUser]=React.useState();
const [mentor,setMentor]=React.useState();

const myPromise0 = new Promise((resolve, reject) => {
  if(true) setTimeout(() => {resolve(
    {
              name: "Merida valiente",
              sobremi: "hola yo soy merida valiente",
              educacion: "por el momento no tengo educacion",
              datosCuriosos: "Soy super ensenando",
              nombrePerfil: "Sofía Aguilar",
              locacionPerfil: "Guadalajara, Jalisco",
              emailPerfil: "sa.aguilarvaldez@gmail.com",
              presentacion:
                "¡Hola! Me llamo Sofía y estoy buscando un mentor para aprender matemáticas.",
              imagePerfil: "./Rosa Carrillo Saturno.png",
            }
  )}, 500);
  else setTimeout(()=>{reject("po")},50)
  });

  const myPromise1 = new Promise((resolve, reject) => {
    if(false) setTimeout(() => {resolve(
      {
                name: "Merida valiente",
                sobremi: "hola yo soy merida valiente",
                educacion: "por el momento no tengo educacion",
                datosCuriosos: "Soy super ensenando",
                nombrePerfil: "Sofía Aguilar",
                locacionPerfil: "Guadalajara, Jalisco",
                emailPerfil: "sa.aguilarvaldez@gmail.com",
                presentacion:
                  "¡Hola! Me llamo Sofía y estoy buscando un mentor para aprender matemáticas.",
                imagePerfil: "./Rosa Carrillo Saturno.png",
              }
    )}, 500);
    else setTimeout(()=>{reject("po")},50)
    });
   
  const us = new Promise((resolve,reject)=>{
  //fetch(`https://localhost:8080/api/mentors/uid/${userId}`)
  //   .then((res) => res.json())
  //   .then((data) => resolve({valu:data,tipo:"usuario"});
   myPromise0.then((e)=>{resolve({valu:e,tipo:"usuario"})}).catch((e)=>{reject({valu:e,tipo:"usuario"})})
  })
  const mento = new Promise((resolve,reject)=>{
    // fetch(`https://localhost:8080/api/mentors/uid/asdfadsf`)
    // .then((res) => res.json())
    // .then((data) => resolve({valu:data,tipo:"mentor"}));
   myPromise1.then((e)=>{resolve({valu:e,tipo:"mentor"})}).catch((e)=>{reject({valu:e,tipo:"mentor"})})
  })

  const promises = [us, mento];
    React.useEffect(() => {
      Promise.any(promises).then((value) =>{
        if(value.tipo==="usuario") setUser(value.valu)
        if(value.tipo==="mentor")  setMentor(value.valu)}
        ).catch((e)=> alert(`El perfil con el  ${userId} no existe`))
  },[userId])  
    // if(isNaN(parseInt(userId))) return props.error 
    if( typeP === "user" && mentor !== undefined ) return <>{<MentorsProfileModule mentorProfileInformationParameter={ mentor } setMentorProfileFunction={ setMentor }/>}</>
    if( typeP === "user" && user !== undefined )return<> {<UserProfileInformation mentorP={ user }/>}</>
    if( typeP === "userProfileInfo" && user !== undefined )return<> {<UserProfileInformation mentorP={ user }/>}</>
    if( typeP === "mentorsProfile" && mentor !== undefined ) return <>{<MentorsProfileModule mentorProfileInformationParameter={ mentor } setMentorProfileFunction={setMentor}/>}</>
    if(user === undefined || mentor === undefined) return props.error
}
export {UrlDynamic}
