import React,{useState} from 'react'
// import CardsMentores from '../Redux/CardsMentores';
import FiltroBusqueda from '../Redux/FiltroBusqueda';
import {CardMentor} from './cardMentor';

function MentorsMenu(props){    
  console.log(props.info.items)
  const [mentor,setMentor]=useState(props.info.items)
  const cont =mentor.map((item)=><CardMentor price={item.price} name={item.name} img={item.img} class={item.class}/>)
  
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

            <hr />
            <FiltroBusqueda  mentor={mentor} setMentor={setMentor}/>
            <hr />
            
          </div>
        </div>
        <div className=" row justify-content-md-center position-relative py-3">
            {cont}
            </div>
      </>
    );

    
}

export default MentorsMenu