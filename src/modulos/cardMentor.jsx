import React from "react"


const CardMentor =(props)=>{
console.log(props)
return(
    <>
    <div name="item" class=" m-3 position-relative"  id= "mentorCard" >
        <a href="#mentorsCards" data-bs-toggle="modal" >
            <img src={props.img} class="  card-img-top"  data-bs-toggle="mentorsCards"  alt="..." style="border-radius: 30px;"/>
        </a>
        <div class="card-body position-absolute bottom-0  bg-dark bg-opacity-50 text-white col-12" style="width: 16.5rem; border-bottom-left-radius:30px; border-bottom-right-radius:30px;">
            <h5 class="card-title">${props.name}</h5>
            <div class="row justify-content-between">
                <div class="col-4">
                    {props.class}
                </div>
                <div class="col-7 text-end">
                    {props.price} MNX/Hr
                </div>  
            </div>
            
        </div>
    </div>
    </>)
}
export   {CardMentor}