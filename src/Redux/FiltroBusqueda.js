import React,{useState} from 'react'


let temp = [];

export default function FiltroBusqueda(props){

   
    const[clase,setClase] = useState("");
    const[estrellas,setEstrellas] = useState("");

    const handleSubmit = e =>{

        e.preventDefault();
        alert("filtro de busqueda activado" + clase +" "+estrellas);
      

        let filtrado = {
          star: `${estrellas}`,
          class: `${clase}`,
        };
    
    
    getOptionSearchBar(filtrado);
    console.log(temp);
    
    }
                                 
    function getOptionSearchBar(Categoryvalue, item = props.mentor){


        
        let banderaStar = 0;
        let banderaClass = 0;
    
    
        if( Categoryvalue.star != ""){
    
            banderaStar = 1;
            console.log("estoy filtrando por estrellas");
        }
        
        if( Categoryvalue.class != ""){
    
            banderaClass = 1;
            console.log("estoy filtrando por clases");
        }
        
        
        if( banderaClass == 1 && banderaStar == 0) {
    
            for (let el = 0; el < item.length; el++) {
                if(Categoryvalue.class ==item[el].class){
    
                     temp.push(item[el]);
                      // cont[index][variable] = item;
                     
    
                    }
                
            }
    
        }
    
    
        if( banderaClass == 0 && banderaStar == 1) {
    
            for (let el = 0; el < item.length; el++) {
                if(Categoryvalue.star ==item[el].star){
    
                     temp.push(item[el]);
                      // cont[index][variable] = item;
                     
    
                    }
                
            }
    
        }
    
    
        if( banderaClass == 1 && banderaStar == 1) {
    
            for (let el = 0; el < item.length; el++) {
                if(Categoryvalue.star ==item[el].star && Categoryvalue.class ==item[el].class){
    
                     temp.push(item[el]);
                      // cont[index][variable] = item;
                     
    
                    }
                
            }
    
        
            props.setMentor(temp);
            
        
        //return (cont)
        
    }
  }
    
    /*
    function ClearSearch(){
    
        let cont = [];
        cont = mentor.items;
    
        inputMentor(cont,"Cards-Mentores");
    
    }
    */


    
    return (
      <>
        <h2>Formulario de busqueda</h2>
        <div className="container-xl">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-4">
                <form>
                  <label htmlFor="">Filtrar por Asignatura</label>
                  <select
                    id="FilterClass"
                    className="form-control"
                    name="FilterClass"
                    onChange={(e) => setClase(e.target.value)}
                  >
                    <option selected value="">Selecciona..</option>
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
                </form>
              </div>

              <div className="col-4">
                <form>
                  <label htmlFor="">Filtrar por Estrellas</label>
                  <select
                    id="FilterStars"
                    className="form-control"
                    name="FilterStars"
                    onChange={(e) => setEstrellas(e.target.value)}
                  >
                    <option selected value="">Selecciona..</option>
                    <option value="1">1 Estrella</option>
                    <option value="2">2 Estrellas</option>
                    <option value="3">3 Estrellas</option>
                    <option value="4">4 Estrellas</option>
                    <option value="5">5 Estrellas</option>
                  </select>
                </form>
              </div>

              <div className="col-2 mt-4">
                <input type="submit"></input>
              </div>
            </div>
          </form>
        </div>
      </>
    );
}