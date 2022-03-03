import React from "react";

import { Formik, Form, Field } from "formik";
import { FormControlLabel, Checkbox, Button, TextField } from "@mui/material";

import { withRouter } from "react-router-dom";

const PersonalInfoStep = (props) => {
  return (
    <div className="form-section">
      <div className="row">
        <div className="col "></div>
        <div
          className="col-md-6 card py-5 px-4"
          style={{ backgroundColor: "beige" }}
        >
          <div className="form-container mt-5">
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
                    <h3>Cuéntanos más sobre de ti</h3>
                    <Field
                      name="firstName"
                      component={TextField}
                      label="Nombre"
                    ></Field>
                    <Field
                      name="lastName"
                      component={TextField}
                      label="Apellido"
                    ></Field>
                    <Field
                      name="birthday"
                      component={TextField}
                      label="Fecha de nacimiento"
                    ></Field>
                    <Field
                      name="location"
                      component={TextField}
                      label="Ubicación"
                    ></Field>
                    <Field
                      name="phone"
                      component={TextField}
                      label="Teléfono"
                    ></Field>
                    <h3>Elige como usaras Mentoritos ... </h3>
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      name="mentor"
                      label="Mentor"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      name="student"
                      label="Estudiante"
                    />

                    <Button
                      type="submit"
                      variant="text"
                      onClick={() => props.history.push("/login")}
                    >
                      Regresar
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => props.history.push("/MentorInfoStep")}
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
