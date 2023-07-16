import { Field } from "formik";
import FormWrapper from "./FormWrapper";

const UserDetails = ({ firstname, lastname, username, age, updateFields }) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <Field
        name="FirstName"
        type="text"
        value={firstname || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ firstname: e.target.value })}
      ></Field>

      <label>Last Name</label>
      <Field
        name="LastName"
        type="text"
        value={lastname || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ lastname: e.target.value })}
      ></Field>

      <label>Username</label>
      <Field
        name="Username"
        type="text"
        value={username || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ username: e.target.value })}
      ></Field>

      <label>Age</label>
      <Field
        name="age"
        type="text"
        value={age || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ age: e.target.value })}
      ></Field>
    </FormWrapper>
  );
};

export default UserDetails;
