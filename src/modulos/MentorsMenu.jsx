import React,{useState} from 'react'
//import { render } from 'react-dom';
import { Mentor } from '../mentor';
// import CardsMentores from '../Redux/CardsMentores';
import {CardMentor} from './cardMentor';


let temp = [];
let Vclase ="";
let Vestrellas="";


//FiltroBusqueda
function MentorsMenu(props){   
    
    const[clase,setClase] = useState("");
    const[estrellas,setEstrellas] = useState("");
    const [mentor,setMentor]=useState(props.info.items)
    let cont =mentor.map((item)=><CardMentor price={item.price} name={item.name} img={item.img} class={item.class}/>)

    function showdata( flag){
   if(flag == 0){

   cont =mentor.map((item)=><CardMentor price={item.price} name={item.name} img={item.img} class={item.class}/>)
  
   }else{
    
    cont =temp.map((item)=><CardMentor price={item.price} name={item.name} img={item.img} class={item.class}/>)

   }
  }

  const handleSubmit = (e) =>{
    Vclase= clase;
    Vestrellas=estrellas;

    e.preventDefault();
    alert("filtro de busqueda activado" + Vclase +" "+Vestrellas);
    temp=[];

    let filtrado = {
      star: `${Vestrellas}`,
      class: `${Vclase}`,
    };



getOptionSearchBar(filtrado);
Vclase="";
Vclase="";
console.log(temp);
//showdata(1);
}


  function getOptionSearchBar(Categoryvalue, item = Mentor.items){


        
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
}

} 
 
    return (
      <>
        <div className="container">
          <div className="mt-4" id="main">
            <section className="titulo">
              <div className="text-center mt-3  pt-5">
                <h2>
                  Elige a tu <strong>mentorito</strong> favorito
                </h2>
                <p>
                  Aquí podrás encontrar una amplia variedad de mentores listos
                  para acompañarte en tu proceso de aprendizaje.
                </p>
              </div>
            </section>

            <h2>Formulario de busqueda</h2>
            <form onSubmit={handleSubmit}>
            <div className="container-xl">
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
                      <option selected value="">
                        Selecciona..
                      </option>
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
                      <option selected value="">
                        Selecciona..
                      </option>
                      <option value="1">1 Estrella</option>
                      <option value="2">2 Estrellas</option>
                      <option value="3">3 Estrellas</option>
                      <option value="4">4 Estrellas</option>
                      <option value="5">5 Estrellas</option>
                    </select>
                  </form>
                </div>

                <div className="col-2 mt-4">
                  <input type="submit"
                         onClick={(e)=> setMentor(temp)}
                  ></input>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
        <div className=" row justify-content-md-center position-relative py-3">
          {cont}
        </div>
      </>
    );
  

    
}

export default MentorsMenu