import React from 'react'
import FormWrapper from './FormWrapper'

const ChildDetails = ({ child, updateFields, }) => {
    const handleInputChange = (index, field, value) => {
        const updatedChild = [...child];
        updatedChild[index] = { ...updatedChild[index], [field]: value };
        updateFields({ child: updatedChild });
    };

    const handleAddChild = () => {
        const updatedChild = [...child, {}];
        updateFields({ child: updatedChild });
    };

    return (
        <div>

            {child.map((childData, index) => (
                <FormWrapper title={`Child ${index + 1} Details`} key={index} >
                    <label>Name</label>
                    <input
                        name={`child[${index}].childname`}
                        type="text"
                        value={childData.childname || ""}
                        onChange={(e) => handleInputChange(index, "childname", e.target.value)}
                        required
                    />

                    <label>Surname</label>
                    <input
                        name={`child[${index}].childsurname`}
                        type="text"
                        value={childData.childsurname || ""} // Initialize value with an empty string
                        onChange={(e) => handleInputChange(index, "childsurname", e.target.value)}
                        required
                    />

                    <label>Date of Birth</label>
                    <input
                        name={`child[${index}].childdob`}
                        type="text"
                        value={childData.childdob || ""} // Initialize value with an empty string
                        onChange={(e) => handleInputChange(index, "childdob", e.target.value)}
                        required
                    />

                    <label>Gender</label>
                    <label htmlFor='male' >
                        <input
                            name={`child[${index}].childgender`}
                            type="radio"
                            value={childData.childgender || ""} // Initialize value with an empty string
                            onChange={(e) => handleInputChange(index, "childgender", e.target.value)}
                            required
                        />
                        Male
                    </label>

                    <label htmlFor='female' >
                        <input
                            type='radio'
                            name={`child[${index}].childgender`}
                            value={childData.childgender || ""} // Initialize value with an empty string
                            onChange={(e) => handleInputChange(index, "childgender", e.target.value)}
                            required

                        />
                        Female
                    </label>

                    <label>Nationality</label>
                    <input
                        name={`child[${index}].childnationality`}
                        type="text"
                        value={childData.childnationality || ""} // Initialize value with an empty string
                        onChange={(e) => handleInputChange(index, "childnationality", e.target.value)}
                        required
                    />

                    <label>Class</label>
                    <select name={`child[${index}].childclass`} onChange={(e) => handleInputChange(index, "childclass", e.target.value)} required >
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
                    <select name={`child[${index}].childsyllabus`} onChange={(e) => handleInputChange(index, "childsyllabus", e.target.value)} required >
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="Cambridge">Cambridge</option>
                        <option value="TS State">TS State</option>
                    </select>

                    <label>School/College Name</label>
                    <input
                        name={`child[${index}].childschool`}
                        type="text"
                        value={childData.childschool || ""} // Initialize value with an empty string
                        onChange={(e) => handleInputChange(index, "childschool", e.target.value)}
                        required
                    />

                    <label>Medium of Instruction</label>
                    <select name={`child[${index}].mediumofinstruction`} onChange={(e) => handleInputChange(index, "mediumofinstruction", e.target.value)} required >
                        <option value="Telugu">Telugu</option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                    </select>

                    <label>First Language</label>
                    <input
                        name={`child[${index}].firstlanguage`}
                        type="text"
                        value={childData.firstlanguage || ""} // Initialize value with an empty string
                        onChange={(e) => handleInputChange(index, "firstlanguage", e.target.value)}
                        required
                    />

                    <label>Second Language</label>
                    <input
                       name={`child[${index}].secondlanguage`}
                       type="text"
                       value={childData.secondlanguage || ""} // Initialize value with an empty string
                       onChange={(e) => handleInputChange(index, "secondlanguage", e.target.value)}
                       required
                    />


                    <label>Third Language</label>
                    <input
                        name={`child[${index}].thirdlanguage`}
                        type="text"
                        value={childData.thirdlanguage || ""} // Initialize value with an empty string
                        onChange={(e) => handleInputChange(index, "thirdlanguage", e.target.value)}
                        required
                    />

                    <label>Child Account Password</label>
                    <input
                        name={`child[${index}].childpassword`}
                        type="text"
                        value={childData.childpassword || ""} // Initialize value with an empty string
                        onChange={(e) => handleInputChange(index, "childpassword", e.target.value)}
                        required
                    />

                    <label>Re-enter Password</label>
                    <input
                        name={`child[${index}].childconfirmpassword`}
                        type="text"
                        value={childData.childconfirmpassword || ""} // Initialize value with an empty string
                        onChange={(e) => handleInputChange(index, "childconfirmpassword", e.target.value)}
                        required
                    />

                    {/* Rest of the form fields for each child */}
                </FormWrapper>
            ))}



            <a href="#" onClick={handleAddChild}>Add Child</a>


        </div>
    )
}

export default ChildDetails
