import React, { useState } from 'react'

const FormValidation = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fruits: "",
        gender: "",
        file: ""
    })

    const [formError, setFormError] = useState({})

    const validateForm = () => {

        let err = {};

        if (formData.email === "") {
            err.email = "email required !"
        } else if (formData.password === "") {
            err.password = "password required !"
        }
        else if (formData.fruits === "") {
            err.fruits = " must select fruits !"
        }
        else if (formData.gender === "") {
            err.gender = "gender must required !"
        }
        setFormError({ ...err })

        // check validation
        return Object.keys(err).length < 1;
    }

    const submitFormData = (e) => {
        e.preventDefault();
        let isValid = validateForm();
        if (isValid) {
            alert("Submitted", isValid)
        }
        else {
            alert("Invalid Form", isValid)
        }
        console.log("All datas", formData);
    }

    const handleChange = (e) => {

        // Handle file input separately
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };


    return (
        <div className='container'>
            <form onSubmit={submitFormData}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
                    <span>{formError.email}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name='password' id="exampleInputPassword1" value={formData.password} onChange={handleChange} />
                    <span>{formError.password}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Fruits</label>
                    <select class="form-control" name='fruits' id="exampleInputPassword1" value={formData.fruits} onChange={handleChange}>
                        <option>Select</option>
                        <option value="Banana">Banana</option>
                        <option value="Apple">Apple</option>
                        <option value="Grapes">Grapes</option>
                    </select>
                    <span>{formError.fruits}</span>
                </div>
                <div class="form-group">
                    <label className='font-weight-bold'>Gender</label>
                    <div>
                        <input type="radio" class="form-check-input" name='gender' id="male" value="Male" onChange={handleChange} />  <label htmlFor='male'>male</label>
                    </div>
                    <div>
                        <input type="radio" class="form-check-input" name='gender' id="female" value="Female" onChange={handleChange} />  <label htmlFor='female'>Female</label>
                    </div>
                    <div>
                        <input type="radio" class="form-check-input" name='gender' value="Not Disclose" id="Not Disclose" onChange={handleChange} />  <label htmlFor='not disclose'>Not Disclose</label>

                    </div>
                    <span>{formError.gender}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">File</label>
                    <input
                        type="file"
                        className="form-control"
                        name="file"
                        id="exampleInputPassword1"
                        onChange={handleChange}
                    />
                    {formData.file && <p>Selected file: {formData.file.name}</p>}
                    <span>{formError.file}</span>
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default FormValidation;