import React from 'react';
import {EditarTextContent} from '../EditorTextContent';

const Modal = ({
    mentorprofileInformation,
    setMentorProfile,}) => {/*mentorprofileInformation puede ser nombrado de diferente forma porque es un parametro*/

const [sobremi, setSobremi] = React.useState(mentorprofileInformation.sobremi);

const [education, setEducation] = React.useState(mentorprofileInformation.educacion);

const [datoCurioso, setDatoCurioso] = React.useState(mentorprofileInformation.datosCuriosos);

const onSubmitInformation = (event) => {event.preventDefault();/*Es necesario ponerlo para que la pagina no se refresque y se eliminen los datos actulizados*/
    setMentorProfile({
    name: "Merida valiente",
    sobremi: sobremi,
    educacion: education,
    datosCuriosos: datoCurioso,
    });
};

const onClickUpdate = () => {
    setSobremi(mentorprofileInformation.sobremi);
    setEducation(mentorprofileInformation.educacion);
    setDatoCurioso(mentorprofileInformation.datosCuriosos);
};

return (
    <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Editar información de perfil</h5>
                <button
                    type="button"
                    onClick={onClickUpdate}
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>    
            <form onSubmit={onSubmitInformation}>
                <div className="modal-body">
                    <EditarTextContent
                    title="Sobre mi"
                    editInfo={sobremi}
                    setEditInfo={setSobremi}
                />
                <EditarTextContent
                title="Educacion"
                editInfo={education}
                setEditInfo={setEducation}
                />
                <EditarTextContent
                title="Datos curiosos"
                editInfo={datoCurioso}
                setEditInfo={setDatoCurioso}
                />
                </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={onClickUpdate}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Modal };
