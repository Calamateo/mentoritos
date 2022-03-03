import React,{useState} from 'react'
//import { render } from 'react-dom';
import { Mentor } from '../mentor';
// import CardsMentores from '../Redux/CardsMentores';
import {CardMentor} from './cardMentor';


let temp = [];

let Vclase ="";
let Vprice="";
 let todo = Mentor.items;

//FiltroBusqueda
function MentorsMenu(props){   
    
    const[clase,setClase] = useState("");
    const[price,setPrice] = useState("");
    const [mentor,setMentor]=useState(props.info.items)
    let cont =mentor.map((item)=><CardMentor price={item.price} name={item.name} img={item.img} class={item.class}/>)
       
   
  function getOptionSearchBar(Categoryvalue, item = Mentor.items){


        
    let banderaPrice = 0;
    let banderaClass = 0;


    if( Categoryvalue.price != ""){

        banderaPrice = 1;
        console.log("estoy filtrando por rango de precios ");
    }
    
    if( Categoryvalue.class != ""){

        banderaClass = 1;
        console.log("estoy filtrando por clases");
    }
    
    
    if( banderaClass == 1 && banderaPrice == 0) {

        for (let el = 0; el < item.length; el++) {
            if(Categoryvalue.class ==item[el].class){

                 temp.push(item[el]);
                  // cont[index][variable] = item;
                 

                }
            
        }

    }


    if( banderaClass == 0 && banderaPrice == 1) {

        for (let el = 0; el < item.length; el++) {
            if(Categoryvalue.price == "1"){

              if(item[el].price < 100){
  
                temp.push(item[el]);
              }
            }else if(Categoryvalue.price == "2"){
              if(item[el].price >= 100 && item[el].price < 200 ){
  
                temp.push(item[el]);
              }

            }else if(Categoryvalue.price == "3"){
              if(item[el].price >= 200 && item[el].price < 300 ){
  
                temp.push(item[el]);
              }

              }else if(Categoryvalue.price == "4"){
                if(item[el].price >= 300){
    
                  temp.push(item[el]);
                }
  
              }

            }
          } // fitlro por rango de precios
            

          if( banderaClass == 1 && banderaPrice == 1) {

            for (let el = 0; el < item.length; el++) {
                if(Categoryvalue.price == "1"){
    
                  if(item[el].price < 100 && Categoryvalue.class ==item[el].class){
      
                    temp.push(item[el]);
                  }
                }else if(Categoryvalue.price == "2"){
                  if(item[el].price >= 100 && item[el].price < 200 && Categoryvalue.class ==item[el].class ){
      
                    temp.push(item[el]);
                  }
    
                }else if(Categoryvalue.price == "3"){
                  if(item[el].price >= 200 && item[el].price < 300  && Categoryvalue.class ==item[el].class){
      
                    temp.push(item[el]);
                  }
    
                  }else if(Categoryvalue.price == "4"){
                    if(item[el].price >= 300 && Categoryvalue.class ==item[el].class){
        
                      temp.push(item[el]);
                    }
      
                  }
    
                }
              } // fitlro por ambas categorias

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
            <form>
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
                      <label htmlFor=""> por Rango de Precios</label>
                      <select
                        id="FilterStars"
                        className="form-control"
                        name="FilterStars"
                        onChange={(e) => setPrice(e.target.value)}
                      >
                        <option selected value="">
                          Selecciona..
                        </option>
                        <option value="1"> menor de 100$ MXN</option>
                        <option value="2">entre 100$ y 200$ MXN </option>
                        <option value="3">entre 200$ y 300$ MXN</option>
                        <option value="4">mayor que 300$ MXN</option>
                        
                      </select>
                    </form>
                  </div>

                  <div className="col-2 mt-4">
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={(e) => {
                        setMentor(temp);
                        Vclase = clase;
                        Vprice = price;

                        temp = [];

                        let filtrado = {
                          price: `${Vprice}`,
                          class: `${Vclase}`,
                        };

                        getOptionSearchBar(filtrado);
                        Vprice = "";
                        Vclase = "";
                        console.log(temp);
                        e.preventDefault();
                      }}
                    >
                      Filtrar
                    </button>
                  </div>

                  <div className="col-2 mt-4">
                    <button
                    type="button"
                    class="btn btn-primary"
                    onClick={(e)=>{
                       
                      setMentor(todo)
                      e.preventDefault();
                    }}
                    >
                      Limpiar</button>
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