import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { useMultiStepForm } from "../multistepformhook/useMultiStepForm";
import MobileSignUp from "./MobileSignUp";
import ParentPassword from "./ParentPassword";
import ParentDetails from "./ParentDetails";
import ChildDetails from "./ChildDetails";
// import {signupSchema} from '../validationschema'

const RegistrationForm = () => {
  const [data, setData] = useState({
    parentsmobileno: "",
    parentsmobileotp: "",
    parentspassword: "",
    parentsconfirmpassword: "",
    parentsname: "",
    parentssurname: "",
    parentsalternateno: "",
    parentsemail: "",
    country: "",
    postalzipcode: "",
    state: "",
    city: "",
    district: "",
    address: "",
    mothertongue: "",
    child: [
      {
        childname: "",
        childsurname: "",
        childdob: "",
        childgender: "",
        childnationality: "",
        childclass: "",
        childsyllabus: "",
        childschool: "",
        mediumofinstructution: "",
        firstlanguage: "",
        secondlanguage: "",
        thirdlanguage: "",
        childaccountpassword: "",
        childconfirmpassword: "",
      },
    ],
  });

  const [isOTPMatched, setIsOTPMatched] = useState(false);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const addChild = () => {
    setData((prev) => {
      const updatedChild = [...prev.child, {}];
      return { ...prev, child: updatedChild };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, isSecondStep, isLastStep, back, next } =
    useMultiStepForm([
      <MobileSignUp
        {...data}
        updateFields={updateFields}
        isOTPMatched={isOTPMatched}
        setIsOTPMatched={setIsOTPMatched}
      />,
      <ParentPassword 
        {...data} 
        updateFields={updateFields} 
      />,
      <ParentDetails {...data} updateFields={updateFields} />,
      <ChildDetails {...data} updateFields={updateFields} addChild={addChild} />
    ]);

  const isNextButtonDisabled = !isOTPMatched; // Disable the Next button if OTP is not matched

  return (
    <>
      <div
        style={{
          position: "absolute",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
        }}
      >
        <Formik
          initialValues={data}
          // validationSchema={signupSchema}
          onSubmit={(values, actions) => {
            if (!isLastStep) return next();

            console.log(data);
            alert("Data Submitted Successfully");
          }}
        >
          {({touched, errors}) => (
            <Form>
              {console.log(errors)}
              <div
                style={{ position: "absolute", top: ".5rem", right: ".5rem" }}
              >
                {currentStepIndex + 1} / {steps.length}
              </div>
              {step}
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  gap: ".5rem",
                  justifyContent: "flex-end",
                }}
              >
                {(isFirstStep && isSecondStep) && (
                  <button type="button" onClick={back}>
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isNextButtonDisabled} // Disable the Next button based on OTP matching
                >
                  {isLastStep ? "Submit" : "Next"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegistrationForm;
