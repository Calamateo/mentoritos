import React, { useState } from 'react'

export default function FiltroBusqueda({mentor,setMentor}) {

  const [clase, setClase] = useState("");
  const [estrellas, setEstrellas] = useState("");

    
  const handleSubmit = (e) => {
    
    let filtrado = [];

    if(clase != "") filtrado.push({"name":"class","valu":clase}) 
    if(estrellas != "") filtrado.push({"name":"star","valu":estrellas})
    alert("filtro de busqueda activado" + clase + " " + estrellas);

     getOptionSearchBar(filtrado, mentor)
   
     e.preventDefault();
   
    
  } 

  function getOptionSearchBar(Categoryvalue, items ) {
    var res =Categoryvalue.map((el)=>items.filter((item)=> !isNaN(parseInt(el.valu)) ? item[`${el.name}`] === parseInt( el.valu) : item[`${el.name}`] === el.valu ) )
    let pibote=[]
  
    if(res.length!=0){
      for (let i = 0; i < res[0].length ; i++) {
        for (let a = 0; a < res[1].length; a++) {
          if (res[0][i].id=== res[1][a].id) {
            pibote.push(res[0][i])
          }     
        }
      }
      console.log(pibote,"pibote")
    }
    else{ console.log(res,"respuesta")}
    
  
  
  }

  return (
    <>
      <h2>Formulario de busqueda</h2>
      <div className="container-xl ">
        <form className='row' onSubmit={ e => {handleSubmit(e) } }>
            <div className="col-4">
              <label htmlFor="">Filtrar por Asignatura</label>
              <select
                id="FilterClass"
                className="form-control"
                name="FilterClass"
                onChange={(e) => setClase(e.target.value)}
              >
                <option selected>Selecciona..</option>
                <option value="Música">Música</option>
                <option value="Matemáticas">Matemáticas</option>
                <option value="Quimica">Quimica</option>
                <option value="Canto">Canto</option>
                <option value="Pintura Óleo">Pintura Óleo</option>
                <option value="Acuarela">Acuarela</option>
                <option value="Inglés">Inglés</option>
                <option value="Danza Contemporanea">
                  Danza Contemporanea
                </option>
                <option value="Programación">Programación</option>
                <option value="Electrónica">Electrónica</option>
              </select>            
            </div>  
            <div className="col-4">
            <label htmlFor="">Filtrar por Estrellas</label>
              <select
                id="FilterStars"
                className="form-control"
                name="FilterStars"
                onChange={(e) => setEstrellas(e.target.value)}
              >
                <option selected>Selecciona..</option>
                <option value="1">1 Estrella</option>
                <option value="2">2 Estrellas</option>
                <option value="3">3 Estrellas</option>
                <option value="4">4 Estrellas</option>
                <option value="5">5 Estrellas</option>
              </select>
            </div>
            <div className='col-4 mt-4' >
            <button type="submit" className="btn rounded-pill buttons">enviar</button>
            </div>
        </form>
      </div>
    </>
  );
}