import React from "react";
import { Link, withRouter } from "react-router-dom";

const Progress = ({ location: { pathname } }) => {
  const isSignUpStep = pathname === "/signUp";
  const isFirstStep = pathname === "/first";
  const isSecondStep = pathname === "/MentorInfoStep";
  const isThirdStep = pathname === "/StudentInfoStep";

  return (
    <React.Fragment>
      <div className="steps">
        <div className={`${isSignUpStep ? "step active" : "step"}`}>
          <div>1</div>
          <div>
            {isFirstStep || isSecondStep || isThirdStep ? (
              <Link to="/signUp">Registra tu correo</Link>
            ) : (
              "Registra tu correo"
            )}
          </div>
        </div>
        <div className={`${isFirstStep ? "step active" : "step"}`}>
          <div>2</div>
          <div>
            {isSecondStep ? <Link to="/first">1</Link> : "Información personal"}
          </div>
        </div>
        <div
          className={`${
            pathname === "/MentorInfoStep" || pathname === "/StudentInfoStep"
              ? "step active"
              : "step"
          }`}
        >
          <div>3</div>
          <div>Información adicional</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default withRouter(Progress);
