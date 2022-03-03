import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  FormControlLabel,
  InputLabel,
  MenuItem,
  FormControl,
  Checkbox,
  Button,
  FormHelperText,
  Select,
  TextField,
  Autocomplete,
  TextareaAutosize,
} from "@mui/material";

const StudentInfoStep = (props) => {

  const [about, setAbout] = useState('')
  const [portafolio, setPortafolio] = useState('')
  const [education, setEducation] = useState('')

  const registrar = e => {
    e.preventDefault()


    if (sessionStorage.getItem('informacionPersonal')) {
      const db = { d: JSON.parse(sessionStorage.getItem('informacionPersonal')) }

      console.log(db)
      console.log(db.d.uid)

      const data = {
        "uid": db.d.uid,
        "name": db.d.name,
        "lastname": db.d.lastname,
        "birthday": "1970-04-19",
        "location": db.d.location,
        "phone": db.d.phone,
        "imageProfile": db.d.image_profile,
        "about": about,
        "education": education,
        "interests": portafolio,
        "registerDate": "2022-03-02T21:20:16"
      }

      console.log(data)

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(data);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/api/students/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));



      sessionStorage.setItem('Informacion', JSON.stringify(data))
    }

  }



  return (
    <>
      <section className="form-section">
        <div className="text-form">
          <h2>Te damos la bienvenida a </h2>
          <h1>Mentoritos</h1>
          <p className="text-white">
            Por favor llena los siguientes campos para crear tu cuenta.
          </p>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-md-6 card py-5 px-4"
            style={{ backgroundColor: "beige" }}
          >
            <Formik
              initialValues={{
                toggleTerms: false,
                price: "",
                modality: "",
                subject: "",
                education: "",
                portfolio: "",
                schedule: "",
                description: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}

              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form onSubmit={isSubmitting}>


                  <div>


                    <h4> Sobre mí</h4>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      onChange={e => setAbout(e.target.value)}
                      placeholder="Queremos conocerte"
                      style={{ width: 500 }}
                    />
                    <h4> Educación</h4>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      onChange={e => setEducation(e.target.value)}
                      placeholder="Hablanos sobre tu eduación"
                      style={{ width: 500 }}
                    />
                    <h4> Portafolio</h4>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      onChange={e => setPortafolio(e.target.value)}
                      placeholder="Datos de portafolio"
                      style={{ width: 500 }}
                    />
                    <Button variant="text"
                      onClick={() => props.history.push("/first")}
                    >Regresar</Button>
                    <Button
                      variant="contained"
                      onClick={registrar}>Completar Registro</Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(StudentInfoStep);
