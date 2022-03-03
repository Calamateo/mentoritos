import { React, useState } from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  FormControlLabel,
  MenuItem,
  FormControl,
  Checkbox,
  Button,
  FormGroup,
  FormHelperText,
  Select,
  TextField,
  TextareaAutosize,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const MentorInfoStep = (props) => {
  const [price, setPrice] = useState([]);
  const [modality, setModality] = useState([]);
  const [modality1, setModality1] = useState("");
  const [materia, setMateria] = useState("");
  const [materia1, setMateria1] = useState("");
  const [horario, setHorario] = useState("");
  const [about, setAbout] = useState("");
  const [education, setEducation] = useState("");
  const [portafolio, setPortafolio] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [terminos, setTerminos] = useState(false);
  const [infoMentor, setInfoMentor] = useState([]);

  const mat = {
    1: "Cocina japonesa",
    2: "Física",
    3: "Examen TOEFL",
    4: "Canto",
    5: "Programación en C#",
    6: "Yoga",
    7: "Tatro",
    8: "Geografía",
    9: "Pintura",
    10: "Solfeo",
    11: "Cálculo",
    12: "Idiomas",
    13: "LoL",
    14: "Cocina",
    15: "Programación en Java",
    16: "Diseño de personaje",
    17: "Ballet",
    18: "Photshop",
    19: "Fotografía",
  };

  const modalidad = {
    1: "Presencial",
    2: "En Línea",
  };

  console.log(materia);
  console.log(materia1);

  const agrgarDatos = (e) => {
    e.preventDefault();
    if (!price.trim()) {
      console.log("datos vacios");
    }

    setMateria1(mat[materia]);
    setModality1(modalidad[modality]);

    if (sessionStorage.getItem("informacionPersonal")) {
      const bd = {
        datos: JSON.parse(sessionStorage.getItem("informacionPersonal")),
      };
      console.log(bd);

      const data = {
        price: price,
        portfolio: portafolio,
        about: about,
        modality: modality1,
        video: videoUrl,
        education: education,
        uid: bd.datos.uid,
        name: bd.datos.name,
        lastname: bd.datos.lastname,
        location: bd.datos.location,
        image_profile: bd.datos.image_profile,
        phone: bd.datos.phone,
        birthdate: "2000-01-01",
        register_date: "2202-03-03",
      };
      setInfoMentor([...infoMentor, data]);

      console.log(infoMentor);
      console.log(data);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(infoMentor);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/mentors/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      sessionStorage.setItem("infomentor", JSON.stringify(data));
    }
  };

  const handleChange = (event) => {
    setMateria(event.target.value);
  };
  const handleChange1 = (event) => {
    setHorario(event.target.value);
  };
  const handleChange2 = (event) => {
    setModality(event.target.value);
  };

  return (
    <div className=" form-section ">
      <div className="text-form mb-5">
        <h2>Cuentános más de ti...</h2>
        <p className="text-white">
          Por favor llena los siguientes campos que se adecuan a ti como mentor.
        </p>
      </div>
      <div
        className="form-container col-md-6 card py-5 px-4 "
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
                <div className="col-md my-4">
                  {/* Materia */}
                  <FormControl sx={{ marginRight: 4, minWidth: 200 }}>
                    <Select
                      value={materia}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>--Seleccionar materia</em>
                      </MenuItem>
                      <MenuItem value={1}>Cocina japonesa</MenuItem>
                      <MenuItem value={2}>Física</MenuItem>
                      <MenuItem value={3}>Examen TOEFL</MenuItem>
                      <MenuItem value={4}>Canto</MenuItem>
                      <MenuItem value={5}>Programación en C#</MenuItem>
                      <MenuItem value={6}>Yoga</MenuItem>
                      <MenuItem value={7}>Tatro</MenuItem>
                      <MenuItem value={8}>Geografía</MenuItem>
                      <MenuItem value={9}>Pintura</MenuItem>
                      <MenuItem value={100}>Solfeo</MenuItem>
                      <MenuItem value={11}>Cálculo</MenuItem>
                      <MenuItem value={12}>Idiomas</MenuItem>
                      <MenuItem value={13}>LoL</MenuItem>
                      <MenuItem value={14}>Cocina</MenuItem>
                      <MenuItem value={15}>Programación en Java</MenuItem>
                      <MenuItem value={16}>Diseño de personaje</MenuItem>
                      <MenuItem value={17}>Ballet</MenuItem>
                      <MenuItem value={18}>Photshop</MenuItem>
                      <MenuItem value={19}>Fotografía</MenuItem>
                    </Select>
                    <FormHelperText>
                      Elige la materia que te gustaría impartir
                    </FormHelperText>
                  </FormControl>
                  {/* Materia */}
                </div>
                <div className="col-md my-4">
                  {/* Horario */}
                  <FormControl>
                    <Select
                      value={horario}
                      onChange={handleChange1}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>--Seleccionar horario</em>
                      </MenuItem>
                      <MenuItem value={1}>8:00-9:00</MenuItem>
                      <MenuItem value={2}>9:00-10:00</MenuItem>
                      <MenuItem value={3}>10:00-11:00</MenuItem>
                      <MenuItem value={4}>11:00-12:00</MenuItem>
                      <MenuItem value={5}>12:00-13:00</MenuItem>
                      <MenuItem value={6}>13:00-14:00</MenuItem>
                      <MenuItem value={7}>14:00-15:00</MenuItem>
                      <MenuItem value={8}>15:00-16:00</MenuItem>
                      <MenuItem value={9}>16:00-17:00</MenuItem>
                      <MenuItem value={10}>17:00-18:00</MenuItem>
                      <MenuItem value={12}>18:00-19:00</MenuItem>
                      <MenuItem value={13}>19:00-20:00</MenuItem>
                      <MenuItem value={14}>20:00-21:00</MenuItem>
                    </Select>
                    <FormHelperText>
                      Elige el horario en el que te encuentras disponible para
                      mentoria
                    </FormHelperText>
                  </FormControl>
                  {/* Horario */}
                </div>
                {/* Dias de la semana */}
                <FormGroup row className="justify-content-center my-4">
                  <div>
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      name="schedule"
                      label="Lunes"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      name="schedule"
                      label="Martes"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      name="schedule"
                      label="Miercoles"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      name="schedule"
                      label="Jueves"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      name="schedule"
                      label="Viernes"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      name="schedule"
                      label="Sábado"
                    />
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      name="schedule"
                      label="Domingo"
                    />
                  </div>
                  <FormHelperText>
                    Elige los días de la semana donde te gustaría agendar
                    mentoría
                  </FormHelperText>
                </FormGroup>

                {/* Dias de la semana */}
                <div className="col-md my-4">
                  {/* tarifa */}
                  <Field
                    name="price"
                    component={TextField}
                    label="Tarifa"
                    type="number"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    onChange={(e) => setPrice(e.target.value)}
                  ></Field>

                  {/* tarifa */}
                </div>
                <div className="col-md my-4">
                  <FormControl sx={{ marginLeft: 3, minWidth: 120 }}>
                    <Select
                      value={modality}
                      onChange={handleChange2}
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
                      Elige la modalidad en la que estarás disponible
                    </FormHelperText>
                  </FormControl>
                </div>
                <div className="my-5">
                  <h4> Sobre mí</h4>
                  <TextareaAutosize
                    sx={{ m: 2 }}
                    aria-label="minimum height"
                    minRows={3}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="Minimum 3 rows"
                    style={{ width: 500, marginBottom: "12px" }}
                  />
                  <h4> Educación</h4>
                  <TextareaAutosize
                    aria-label="minimum height"
                    sx={{ m: 2 }}
                    minRows={3}
                    onChange={(e) => setEducation(e.target.value)}
                    placeholder="Minimum 3 rows"
                    style={{ width: 500, marginBottom: "12px" }}
                  />
                  <h4> Portafolio</h4>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    onChange={(e) => setPortafolio(e.target.value)}
                    placeholder="Minimum 3 rows"
                    style={{ width: 500, marginBottom: "12px" }}
                  />
                </div>
                {/* video */}
                <Field
                  name="video"
                  component={TextField}
                  label="Video URL"
                  type="url"
                  style={{ width: 500, marginBottom: "12px" }}
                  onChange={(e) => setVideoUrl(e.target.value)}
                ></Field>
                {/* video */}
                <br />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  name="termsAndConditiosn"
                  label="Acepto los términos y condiciones"
                  onChange={(e) => setTerminos(!terminos)}
                />
                <Button
                  variant="text"
                  onClick={() => props.history.push("/first")}
                >
                  Regresar
                </Button>
                <Button
                  variant="contained"
                  onClick={agrgarDatos}
                  disabled={!terminos}
                >
                  Completar Registro
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default withRouter(MentorInfoStep);
