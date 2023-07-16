import {Field, Form} from 'formik'
import FormWrapper from './FormWrapper';
const AddressDetails = ({street, city, state, zipcode, updateFields}) => {
  return (
    <FormWrapper title="Address Details">
        <label>Street</label>
        <Field name="street" type="text" value={street || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ street: e.target.value })}></Field>

        <label>City</label>
        <Field name="city" type="text" value={city || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ city: e.target.value })}></Field>

        <label>State</label>
        <Field name="state" type="text" value={state || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ state: e.target.value })}></Field>

        <label>Zip Code</label>
        <Field name="zipcode" type="text" value={zipcode || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ zipcode: e.target.value })}></Field>
    </FormWrapper>
  )
}

export default AddressDetails;
