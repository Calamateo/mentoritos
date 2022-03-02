import React,{useState} from 'react'
// import CardsMentores from '../Redux/CardsMentores';
import FiltroBusqueda from '../Redux/FiltroBusqueda';
import {CardMentor} from './cardMentor';

function MentorsMenu(props){
    

   
    const[mentor,setMentor] = useState(props.info);
    const cont =props.info.map((item,index)=><CardMentor name={item.name}class={item.class} price={item.price } />)
        console.log(props.info)

    return (
      <>
        <div class="container">
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
            <div>
            {cont}
            </div>
          </div>
        </div>
      </>
    );

    
}

export default MentorsMenu