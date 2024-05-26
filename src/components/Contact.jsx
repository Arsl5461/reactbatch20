import React, { useState } from 'react'
import {toast} from "react-toastify"

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        gender: ""
    })
    const { name, email, phone, country, gender } = data;
    const onChange = (e) => {
        setData({...data,[e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        toast.success("Data saved successfully")
        setData({
            name: "",
            email: "",
            phone: "",
            country: "",
            gender: "" 
        })
    }
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1>Contact Us</h1>
            <form onSubmit={onSubmit}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name:</label>
                    <input type="text" class="form-control" name='name' value={name} onChange={onChange} id="name" placeholder="Enter your name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" name='email' value={email} onChange={onChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your number" name='phone' value={phone} onChange={onChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Country:</label>
                    <select class="form-select" aria-label="Default select example" onChange={onChange} name="country" value={country}>
                        <option selected >Select your country</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="PAKISTAN">Pakistan</option>
                        <option value="DUBAI">Dubai</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Gender:</label>
                    <label>Male</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={onChange}
                        id="male" />
                    <label>Female</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={onChange}
                        id="female" />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
