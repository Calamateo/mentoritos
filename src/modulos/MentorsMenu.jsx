import React,{useState} from 'react'
import CardsMentores from '../Redux/CardsMentores';
import FiltroBusqueda from '../Redux/FiltroBusqueda';

function MentorsMenu(){
    

    let info={
        items:[
            {
                name:"Luis"
                ,img:"https://images.pexels.com/photos/953703/pexels-photo-953703.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                ,star:5
                ,class:"Música"
                ,modality:"en linea"
                ,price:150
               
            },
            {
                name:"Juan"
                ,img:"https://images.pexels.com/photos/4307849/pexels-photo-4307849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ,star:5
                ,class:"Pintura Óleo"
                ,modality:"en linea"
                ,price:200
               
            },
            {
                name:"Mon"
                ,img:"https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ,star:4
                ,class:"Danza Contemporanea"
                ,modality:"en linea"
                ,price:350
            
            },
            {
                name:"Karen"
                ,img:"https://images.pexels.com/photos/6094038/pexels-photo-6094038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ,star:5
                ,class:"Inglés"
                ,modality:"en linea"
                ,price:350
              
            },
            
            {
                name:"Brenda"
                ,img:"https://images.pexels.com/photos/7307380/pexels-photo-7307380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ,star:2
                ,class:"Programación"
                ,modality:"en linea"
                ,price:250
               
            },
            {
                name:"Pablo"
                ,img:"https://images.pexels.com/photos/2033287/pexels-photo-2033287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ,star:3
                ,class:"Electrónica"
                ,modality:"en linea"
                ,price:300
                
            },
            {
                name:"Pedro"
                ,img:"https://images.pexels.com/photos/5131401/pexels-photo-5131401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ,star:4
                ,class:"Acuarela"
                ,modality:"en linea"
                ,price:350
               
            },
            {
                name:"Mario"
                ,img:"https://images.pexels.com/photos/4607198/pexels-photo-4607198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ,star:2
                ,class:"Matemáticas"
                ,modality:"en linea"
                ,price:50
                
            },
            {
                name:"Luis"
                ,img:"https://images.pexels.com/photos/10887630/pexels-photo-10887630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ,star:1
                ,class:"Electrónica"
                ,modality:"en linea"
                ,price:150
               
            },
            {
                name:"Mayrelin"
                ,img:"https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ,star:5
                ,class:"Electrónica"
                ,modality:"en linea"
                ,price:300
        
            }
        ]
    }
     
    const[mentor,setMentor] = useState(info);


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
             <CardsMentores mentor={mentor}/> 
          </div>
        </div>
      </>
    );

    
}

export default MentorsMenu