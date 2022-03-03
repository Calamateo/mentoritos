import React from "react";

import { Formik, Form, Field } from "formik";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  TextField,
} from "@mui/material";

import { withRouter } from "react-router-dom";

const PersonalInfoStep = (props) => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [ubicacion, setUbicacion] = React.useState("");
  const [mentor, setMentor] = React.useState(false);
  const [guardado, setGuardado] = React.useState(false);
  const [pagina, setPagina] = React.useState("");
  const [informacion, setInformacion] = React.useState([]);

  const agregarInfo = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      console.log("Campo vacio");
      return;
    }
    if (localStorage.getItem("usuario")) {
      const bd = { datos: JSON.parse(localStorage.getItem("usuario")) };
      console.log(bd);
      console.log(bd.datos.uid);

      setGuardado(!guardado);
      if (mentor) {
        setPagina("/MentorInfoStep");
        const data = {
          price: "",
          portfolio: "",
          about: "",
          modality: "",
          video: "",
          education: "",
          uid: bd.datos.uid,
          name: nombre,
          lastname: apellido,
          location: ubicacion,
          image_profile: bd.datos.url_Imagen,
          phone: telefono,
          birthdate: "",
          register_date: "",
        };
        setInformacion([...informacion, data]);

        sessionStorage.setItem("informacionPersonal", JSON.stringify(data));
      } else {
        setPagina("/StudentInfoStep");
        const data = {
          uid: bd.datos.uid,
          name: nombre,
          lastname: apellido,
          birthday: "",
          location: ubicacion,
          phone: telefono,
          image_profile: bd.datos.url_Imagen,
          about: "",
          education: "",
          interests: "",
          register_date: "",
        };
        setInformacion([...informacion, data]);
        sessionStorage.setItem("informacionPersonal", JSON.stringify(data));
      }
    }
    console.log(informacion);
  };

  return (
    <div className="form-section">
      <div className="text-form">
        <h2>Te damos la bienvenida a </h2>
        <h1>Mentoritos</h1>
        <p className="text-white">
          Por favor llena los siguientes campos para crear tu cuenta.
        </p>
      </div>
      <div className="row justify-content-center">
        <div
          className="col-md-6 card form-container"
          style={{ backgroundColor: "beige" }}
        >
          <div>
            <Formik
              initialValues={{
                userName: "",
                email: "",
                passWord: "",
                toggleTerms: false,
                firstName: "",
                lastName: "",
                location: "",
                telephone: "",
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
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
                props.updateUser(values);
                props.history.push("/MentorInfoStep");
                console.log(values);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mt-5">
                    <div className="col-ms">
                      <Field
                        sx={{ marginRight: 6, minWidth: 300 }}
                        name="firstName"
                        component={TextField}
                        onChange={(e) => setNombre(e.target.value)}
                        label="Nombre"
                      ></Field>
                    </div>
                    <div className="col-ms">
                      <Field
                        sx={{ marginRight: 6, minWidth: 300 }}
                        name="lastName"
                        component={TextField}
                        onChange={(e) => setApellido(e.target.value)}
                        label="Apellido"
                      ></Field>
                    </div>
                    {/* <Field
                      name="birthday"
                      component={TextField}
                      label="Fecha de nacimiento"
                    ></Field> */}
                    <div className="col-ms">
                      <Field
                        sx={{ marginRight: 6, minWidth: 300 }}
                        name="location"
                        component={TextField}
                        label="Ubicación"
                        onChange={(e) => setUbicacion(e.target.value)}
                      ></Field>
                    </div>
                    <Field
                      sx={{ marginRight: 6, minWidth: 300 }}
                      name="phone"
                      component={TextField}
                      onChange={(e) => setTelefono(e.target.value)}
                      label="Teléfono"
                    ></Field>

                    <h3 style={{ marginTop: "30px" }}>
                      Elige como usaras Mentoritos ...{" "}
                    </h3>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Mentor"
                          control={<Radio />}
                          label="Mentor"
                          onChange={(e) => setMentor(true)}
                        />
                        <FormControlLabel
                          value="Estudiante"
                          control={<Radio />}
                          label="Estudiante"
                          onChange={(e) => setMentor(false)}
                        />
                      </RadioGroup>
                    </FormControl>
                    <Button
                      className="buttons"
                      variant="contained"
                      onClick={agregarInfo}
                      disabled={guardado}
                    >
                      Guardar
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => props.history.push(pagina)}
                      disabled={!guardado}
                    >
                      Siguiente
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="col "></div>
      </div>
    </div>
  );
};

export default withRouter(PersonalInfoStep);
