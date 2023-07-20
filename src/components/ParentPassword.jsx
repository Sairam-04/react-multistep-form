import { ErrorMessage, Field } from "formik";
import FormWrapper from "./FormWrapper";

const ParentPassword = ({ parentspassword, parentsconfirmpassword, updateFields }) => {
  return (
    <FormWrapper title="Parents Password Setting">
      <label>Password</label>
      <Field
        name="parentspassword"
        type="password"
        value={parentspassword || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ parentspassword: e.target.value })}
      ></Field>
      <ErrorMessage name="parentspassword" component="small" />


      <label>Confirm Password</label>
      <Field
        name="parentsconfirmpassword"
        type="password"
        value={parentsconfirmpassword || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ parentsconfirmpassword: e.target.value })}
      />
      <ErrorMessage name="parentsconfirmpassword" component="small" className="error-text" />


    </FormWrapper>
  );
};

export default ParentPassword;
