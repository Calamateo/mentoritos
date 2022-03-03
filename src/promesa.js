const myPromise0 = new Promise((resolve, reject) => {
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
   
   const myPromise1 = new Promise((resolve, reject) => {
   if(false)  setTimeout(() => {resolve(   {
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
  })}, 5);
   else   setTimeout(()=>{reject()},5)
     
    });
  
    const user = new Promise((resolve,reject)=>{
     myPromise0.then((e)=>{resolve({valu:e,tipo:"usuario"})}).catch((e)=>{reject({valu:e,tipo:"usuario"})})
    })
    const mentor = new Promise((resolve,reject)=>{
     myPromise1.then((e)=>{resolve({valu:e,tipo:"mentor"})}).catch((e)=>{reject({valu:e,tipo:"mentor"})})
    })
  
    const promises = [user, mentor];
  
    Promise.any(promises).then((value) =>{
        if(value.tipo==="usuario")   console.log(value.valu,0)
        if(value.tipo==="mentor")  console.log( (value.valu ,1))}
        ).catch((e)=> console.log("hola"))
   