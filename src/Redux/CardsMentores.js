import { useEffect } from "react";

export default function CardsMentores(props){

    const imageAbout = require.context('../global/assets/images', true);    
   

function inputMentor(item,element,number=item.length) {
   let conten="";
   let star="";
  
  
    for (let index = 0; index < number ;index++) {
        for (let i = 0; i < 5; i++) {
            if (i<item[index].star) {
                star+=`  <div class="col-1 ">
                <img src={imageAbout('./STAR.svg')} width="24px" alt="start" /> 
              </div>`;
            } else {
                star+=`<div class="col-1 ">
                <img src="../global/assets/images/STARg.svg" width="24px" alt="start" />
              </div>`;
            }
        }
        conten += `
        <div>
    <div name="item" className="  position-relative "  id= "mentorCard" style="width: 2em;">
        <a href="#mentorsCards" data-bs-toggle="modal" onclick=ConstructorModal(${index}) href="#">
     <img src="${item[index].img}" className="  card-img-top"  data-bs-toggle="mentorsCards"  alt="..." style="border-radius: 30px;">
     </a>
    <div className="card-body position-absolute bottom-0  bg-dark bg-opacity-50 text-white col-12" style="width: 16.5rem; border-bottom-left-radius:30px; border-bottom-right-radius:30px;">
          <h5 className="card-title">${item[index].name}</h5>
        <div className="row justify-content-between">
            <div className="col-4">
            ${item[index].class}
            </div>
        <div className="col-7 text-end">
              ${item[index].price} MNX/Hr
    </div>
</div>
            <div className=" g-0 justify-content-around"> <!--contenedor estrellas-->
                ${star}
            </div>
        </div>
      </div>
    </div>
        `;
        star=""
    }
    document.getElementById(`${element}`).innerHTML=conten
   
}
 

 useEffect(() => {
    inputMentor(props.mentor.items,"Cards-Mentores");
  }, [])



/*

function ConstructorModal( id, array = props.mentor ){
  let image = document.getElementById("imageProfile")
  let contentMentor = document.getElementById("contentProfile")
  image.src =`${array[id].img}`
  contentMentor.innerHTML = `<h3>${array[id].name}</h3>
  <h4>Clase impartida: ${array[id].class}</h4>
  <h4>Modalidad: ${array[id].modality}</h4>
  <p>Tarifas accesibles a tan solo: ${array[id].price} Pesos /hora</p>
  <button class="btn  me-3 rounded-pill btn-primary">solicitar clase</button> 
  `;
}
*/

  


return(
    <>
    <h2>aqui va otra bendita seccion</h2>
    <div class="container" id="Cards-Mentores">

    </div>

     



    </>
);


}