import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { useMultiStepForm } from "../multistepformhook/useMultiStepForm";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import FinalForm from "./FinalForm";

const RegistrationForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username:"",
    age:"",
    street:"",
    city:"",
    state:"",
    zip:"",
    email: "",
    password: "",
    confirmpassword:""
  });
  const updateFields = (fields) =>{
    setData(prev =>{
      return {...prev, ...fields}
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserDetails {...data} updateFields={updateFields} />, 
      <AddressDetails {...data} updateFields={updateFields} />, 
      <FinalForm {...data} updateFields={updateFields} />]
    );



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
          onSubmit={(e) => {
            if(!isLastStep) return next()
            
            console.log(data)
            alert("Data Submitted Successfully")
          }}
        >
          {() => (
            <Form>
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
                {isFirstStep && (
                  <button type="button" onClick={back}>
                    Back
                  </button>
                )}
                <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegistrationForm;
