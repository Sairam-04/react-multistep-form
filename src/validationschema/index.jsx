import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  // ...other fields
  parentspassword: Yup.string()
    .matches(/^[0-9]{4}$/, "Password must be a 4-digit PIN")
    .required("Please enter password"),
    parentsconfirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please enter confirm password"),
});

