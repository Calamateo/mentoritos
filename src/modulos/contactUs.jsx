import React from 'react';
import { useState } from 'react';
import {sendMail} from "../sendMail"
const ContactForm = () => {
        const [emaill, setemaill] = useState();
        const [name, setname] = useState();
        const [message, setmessage] = useState();
        const [lastName, setlastName] = useState();
        const handleSubmit= (e) => {

        sendMail(
            {
                nane:name,
                lastName:lastName ,
                message:message,
                email:emaill
            }
            );
            setname('')
            setlastName('')
            setmessage('')
            setmessage('')
            setemaill('')
        e.preventDefault();
        }
        

    return (
    <>
             
                <div className="container-xxl">
                    <div className="row mb-5">
                        <div className="col">
                            <h2>Contacto</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mx-auto" style={{ width: "700px" }}>
                                <h3 className="text-center">Agradecemos tu tiempo para comunicarte con Mentoritos. ¿Cómo podemos
                                    ayudarte?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="mx-auto text-center" style={{ width: "700px" }}>
                                <form onSubmit={e => { handleSubmit(e) }}>
                                    <input className="my-4" type="text" placeholder="Nombre" name="name" value={name} onChange={e => setname(e.target.value)} required />
                                    <br />
                                    <input className="mb-4" type="text" placeholder="Apellido" name="last-name" value={lastName} onChange={e => setlastName(e.target.value)} required />
                                    <br />
                                    <input className="mb-4" type="email" placeholder="Correo" name="e-mail" value={emaill} onChange={e => setemaill(e.target.value)}  required />
                                    <br />
                                    <textarea className="my-4" name="messsage" id="" cols="30" rows="5" placeholder="Mensaje" value={message} onChange={e => setmessage(e.target.value)}
                                        required></textarea>
                                    <br />
                                    <button type="submit" className="btn rounded-pill buttons">enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           
    </>
      )
};
 
export default ContactForm;


