import { Field } from "formik";
import FormWrapper from "./FormWrapper";
const FinalForm = ({ email, password, confirmpassword, updateFields }) => {
  return (
    <FormWrapper title="Final Step">
      <label>Email</label>
      <Field
        name="email"
        type="email"
        value={email || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ email: e.target.value })}
      ></Field>

      <label>Password</label>
      <Field
        name="password"
        type="password"
        value={password || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ password: e.target.value })}
      ></Field>

      <label>Confirm Password</label>
      <Field
        name="confirmpassword"
        type="password"
        value={confirmpassword || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ confirmpassword: e.target.value })}
      ></Field>
    </FormWrapper>
  );
};

export default FinalForm;
