import { React, useState } from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  FormControlLabel,
  MenuItem,
  FormControl,
  Checkbox,
  Button,
  FormHelperText,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";

const MentorInfoStep = (props) => {
  const [price, setPrice] = useState([]);
  const [modality, setModality] = useState([]);
  const [cities, setCities] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <div className="form-section">
      <div className="row">
        <div className="col "></div>
        <div
          className="col-md-6 card py-5 px-4"
          style={{ backgroundColor: "beige" }}
        >
          <div className="form-container mt-5"></div>
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
                  <h3>Cuentanos más de ti</h3>
                  <Select
                    value={""}
                    onChange={""}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>--Seleccionar horario</em>
                    </MenuItem>
                    <MenuItem value={10}>00:00-01:00</MenuItem>
                    <MenuItem value={20}>01:00-02:00</MenuItem>
                    <MenuItem value={30}>02:00-03:00</MenuItem>
                    <MenuItem value={10}>00:00-01:00</MenuItem>
                    <MenuItem value={20}>01:00-02:00</MenuItem>
                    <MenuItem value={30}>02:00-03:00</MenuItem>
                    <MenuItem value={10}>00:00-01:00</MenuItem>
                    <MenuItem value={20}>01:00-02:00</MenuItem>
                    <MenuItem value={30}>02:00-03:00</MenuItem>
                    <MenuItem value={10}>00:00-01:00</MenuItem>
                    <MenuItem value={20}>01:00-02:00</MenuItem>
                    <MenuItem value={30}>02:00-03:00</MenuItem>
                  </Select>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={""}
                      onChange={""}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>--Seleccionar materia</em>
                      </MenuItem>
                      <MenuItem value={10}>Matemáticas</MenuItem>
                      <MenuItem value={20}>Música</MenuItem>
                      <MenuItem value={30}>Inglés</MenuItem>
                    </Select>
                    <FormHelperText>
                      Elige la materia que te gustaría impartir
                    </FormHelperText>
                  </FormControl>
                  <Field
                    name="confirmPassword"
                    component={TextField}
                    label="Tarifa"
                  ></Field>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={""}
                      onChange={""}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>--Seleccionar modalidad</em>
                      </MenuItem>
                      <MenuItem value={1}>Presencial</MenuItem>
                      <MenuItem value={2}>En línea</MenuItem>
                    </Select>
                    <FormHelperText>
                      Elige la materia que te gustaría impartir
                    </FormHelperText>
                  </FormControl>
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

                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    name="termsAndConditiosn"
                    label="Acepto los términos y condiciones"
                  />
                  <Button
                    variant="text"
                    onClick={() => props.history.push("/first")}
                  >
                    Regresar
                  </Button>
                  <Button variant="contained">Completar Registro</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="col "></div>
    </div>
  );
};

export default withRouter(MentorInfoStep);
