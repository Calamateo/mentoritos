import React from 'react'
import '../Css/loading.modules.css'
import menteorito from '../global/assets/images/Vanilla-1s-289px.svg'

function Loading() {
    return (
        <div id="demo" className='vh-100 text-center align-middle'>
            <br /><br /><br />
            <img src={menteorito} width="500px" alt="" />
        </div>
    )
}

export default Loading