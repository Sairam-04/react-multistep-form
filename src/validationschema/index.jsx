import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  // ...other fields
    parentspassword: Yup.string().required("Password is required"),
    parentsconfirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please enter confirm password"),
});

