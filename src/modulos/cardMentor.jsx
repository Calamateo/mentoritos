import React from "react"


const CardMentor =(props)=>{
console.log(props)
return(
    
    <div name="item" className=" m-3 position-relative"  id= "mentorCard"  style={{"width": "18rem"}} >
        <a  data-bs-toggle="modal" >
            <img src={props.img} className="  card-img-top"  data-bs-toggle="mentorsCards"  alt="..." style={{"border-radius": "30px"}}/>
        </a>
        <div className="card-body position-absolute bottom-0  bg-dark bg-opacity-50 text-white col-12" style={{"width": "16.5rem" ,"border-bottom-left-radius":"30px", "border-bottom-right-radius":"30px"}}>
            <h5 className="card-title">{props.name}</h5>
            <div className="row justify-content-between">
                <div className="col-4">
                    {props.class}
                </div>
                <div className="col-7 text-end">
                   {props.price} MNX/Hr
                </div>  
            </div>
            
        </div>
    </div>
    )
}
export   {CardMentor}