import React from 'react'
import FormWrapper from './FormWrapper'

const ChildDetails = ({ child, updateFields, }) => {
    return (
        <FormWrapper title="Child Details">
            <label>Name</label>
            <input
                name="childname"
                type="text"
                value={child[0].childname || ""} // Initialize value with an empty string
                onChange={(e) => updateFields({ child: [{ ...child[0], childname: e.target.value }] })}
                required
            ></input>

            <label>Surname</label>
            <input
                name="childsurname"
                type="text"
                value={child[0].childsurname || ""} // Initialize value with an empty string
                onChange={(e) => updateFields({ child: [{ ...child[0], childsurname: e.target.value }] })}
                required
            />

            <label>Date of Birth</label>
            <input
                name="childdob"
                type="date"
                value={child[0].childdob || ""} // Initialize value with an empty string
                onChange={(e) => updateFields({ child: [{ ...child[0], childdob: e.target.value }] })}
                required
            />

            <label>Gender</label>
            <label htmlFor='male' >
                <input
                    type='radio'
                    name='childgender'
                    value="Male"
                    onChange={(e) => updateFields({ child: [{ ...child[0], childgender: e.target.value }] })}
                />
                Male
            </label>

            <label htmlFor='female' >
                <input
                    type='radio'
                    name='childgender'
                    value="Female"
                    id='female'
                    onChange={(e) => updateFields({ child: [{ ...child[0], childgender: e.target.value }] })}

                />
                Female
            </label>

            <label>Nationality</label>
            <input
                name="childnationality"
                type="text"
                value={child[0].childnationality || ""}
                onChange={(e) => updateFields({ child: [{ ...child[0], childnationality: e.target.value }] })}
                required
            />

            <label>Class</label>
            <select name="childclass" onChange={(e) => updateFields({ child: [{ ...child[0], childclass: e.target.value }] })} required >
                <option value="class1">class1</option>
                <option value="class2">class2</option>
                <option value="class3">class3</option>
                <option value="class4">class4</option>
                <option value="class5">class5</option>
                <option value="class6">class6</option>
                <option value="class7">class7</option>
                <option value="class8">class8</option>
            </select>

            <label>Syllabus</label>
            <select name="childsyllabus" onChange={(e) => updateFields({ child: [{ ...child[0], childsyllabus: e.target.value }] })} required >
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="Cambridge">Cambridge</option>
                <option value="TS State">TS State</option>
            </select>

            <label>School/College Name</label>
            <input
                name="childschool"
                type="text"
                value={child[0].childschool || ""}
                onChange={(e) => updateFields({ child: [{ ...child[0], childschool: e.target.value }] })}
            />

            <label>Medium of Instruction</label>
            <select name="mediumofinstructution" onChange={(e) => updateFields({ child: [{ ...child[0], mediumofinstructution: e.target.value }] })} required >
                <option value="Telugu">Telugu</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
            </select>

            <label>First Language</label>
            <input
                name="firstlanguage"
                type="text"
                value={child[0].firstlanguage || ""}
                onChange={(e) => updateFields({ child: [{ ...child[0], firstlanguage: e.target.value }] })}
                required
            />

            <label>Second Language</label>
            <input
                name="secondlanguage"
                type="text"
                value={child[0].secondlanguage || ""}
                onChange={(e) => updateFields({ child: [{ ...child[0], secondlanguage: e.target.value }] })}
                required
            />


            <label>Third Language</label>
            <input
                name="thirdlanguage"
                type="text"
                value={child[0].thirdlanguage || ""}
                onChange={(e) => updateFields({ child: [{ ...child[0], thirdlanguage: e.target.value }] })}
                required
            />

            <label>Child Account Password</label>
            <input
                name="childaccountpassword"
                type="password"
                value={child[0].childaccountpassword || ""}
                onChange={(e) => updateFields({ child: [{ ...child[0], childaccountpassword: e.target.value }] })}
                required
            />

            <label>Re-enter Password</label>
            <input
                name="childconfirmpassword"
                type="password"
                value={child[0].childconfirmpassword || ""}
                onChange={(e) => updateFields({ child: [{ ...child[0], childconfirmpassword: e.target.value }] })}
                required
            />

            
        </FormWrapper>
    )
}

export default ChildDetails
