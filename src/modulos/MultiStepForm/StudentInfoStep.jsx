import React from "react";
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
  return (
    <>
      <Formik
        initialValues={{
          toggleTerms: false,
          subject: "",
          education: "",
          portfolio: "",
          student: true,
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
                placeholder="Minimum 3 rows"
                style={{ width: 200 }}
              />
              <h4> Educación</h4>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: 200 }}
              />
              <h4> Portafolio</h4>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: 200 }}
              />
              <Button variant="text">Regresar</Button>
              <Button variant="contained">Completar Registro</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default withRouter(StudentInfoStep);
