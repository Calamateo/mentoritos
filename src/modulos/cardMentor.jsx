import React from "react"
import {Start} from "./satart"
import Start from "../global/assets/images/"
import Star from '../global/assets/STAR.svg'
import Starg from '../global/assets/STARg.svg'

const cardMentro =(props)=>{
    let star = (limit)=>{
    for (let index = 0; index < 6 ; index++) {
                limit <= index?<Start img = {Star} />:<Start img = {Starg} />
                
        }
    }
    <>
    <div name="item" class=" m-3 position-relative"  id= "mentorCard" style="width: 18rem;">
        <a href="#mentorsCards" data-bs-toggle="modal" onclick={} href="#">
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
            <div class="row g-0 justify-content-around"> 
            {/*<!--contenedor estrellas-->*/
                star(props.star)
            }
            </div>
        </div>
    </div>
    </>
}
export default {cardMentro}