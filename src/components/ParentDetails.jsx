import { Field } from "formik";
import FormWrapper from "./FormWrapper";

const ParentDetails = ({ parentsname, parentssurname, parentsalternateno, parentsemail,state, postalzipcode, city, district, address, mothertongue, updateFields }) => {
  return (
    <FormWrapper title="Parents Personal Details">
      <label>Name</label>
      <input
        name="parentsname"
        type="text"
        value={parentsname || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ parentsname: e.target.value })}
        required
      ></input>

      <label>Surname</label>
      <input
        name="parentssurname"
        type="text"
        value={parentssurname || ""} // Initialize value with an empty string
        onChange={(e) => updateFields({ parentssurname: e.target.value })}
        required
      />

      <label>Alternate Contact Number</label>
      <input 
        name="parentsalternateno"
        type="text"
        value={parentsalternateno || ""}
        onChange = {(e)=> updateFields({parentsalternateno: e.target.value})}
        required
      />

      <label>Email Address</label>
      <input 
        name="parentsemail"
        type="email"
        value={parentsemail || ""}
        onChange = {(e)=> updateFields({parentsemail: e.target.value})}
        required
      />

      <label>ZipCode</label>
      <input 
        name="postalzipcode"
        type="text"
        value={postalzipcode || ""}
        onChange = {(e)=> updateFields({postalzipcode: e.target.value})}
        required
      />

      <label>State</label>
      <select name="state" onChange = {(e)=> updateFields({state: e.target.value})} required >
        <option value="None">None</option>
        <option value="Telangana">Telangana</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Bihar">Bihar</option>
        <option value="Assam">Assam</option>
        <option value="Delhi">Delhi</option>
        <option value="Punjab">Punjab</option>
      </select>

      <label>City</label>
      <input 
        name="city"
        type="text"
        value={city || ""}
        onChange = {(e)=> updateFields({city: e.target.value})}
        required
      />

      <label>District</label>
      <input 
        name="district"
        type="text"
        value={district || ""}
        onChange = {(e)=> updateFields({district: e.target.value})}
        required
      />

      <label>Address Line 1</label>
      <textarea 
        name="address" 
        value={address || ""}
        onChange = {(e)=> updateFields({address: e.target.value})}  
        required
      ></textarea>

      <label>Mother Tongue</label>
      <select name="mothertongue" onChange = {(e)=> updateFields({mothertongue: e.target.value})} required >
        <option value="None">None</option>
        <option value="Telugu">Telugu</option>
        <option value="Hindi">Hindi</option>
        <option value="Urdu">Urdu</option>
        <option value="Tamil">Tamil</option>
        <option value="Bengali">Benagali</option>
        <option value="English">English</option>
        <option value="Kannada">Kannada</option>
        <option value="Malayalam">Malayalam</option>
      </select>

    </FormWrapper>
  );
};

export default ParentDetails;
