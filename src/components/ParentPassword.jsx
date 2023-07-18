import { ErrorMessage, Field } from "formik";
import FormWrapper from "./FormWrapper";

const ParentPassword = ({ parentspassword, parentsconfirmpassword, updateFields }) => {
  return (
    <FormWrapper title="Parents Password Setting">
      <label>Password</label>
      <input
        name="parentspassword"
        type="password"
        value={parentspassword || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ parentspassword: e.target.value })}
        required
      ></input>
      <ErrorMessage name="parentspassword" component="small" className="error-text" />


      <label>Confirm Password</label>
      <input
        name="parentsconfirmpassword"
        type="password"
        required
        value={parentsconfirmpassword || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ parentsconfirmpassword: e.target.value })}
      />
      <ErrorMessage name="parentsconfirmpassword" component="small" className="error-text" />


    </FormWrapper>
  );
};

export default ParentPassword;
