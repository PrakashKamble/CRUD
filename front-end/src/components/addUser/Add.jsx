import React, { useState } from 'react';
import "./add.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Add = () => {
    // Default user form values
    const initialValues = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();

    // Handle input changes
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Submit form data
    const submitForm = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await axios.post("http://localhost:8000/api/create", user);
            if (response.data?.msg) {
                toast.success(response.data.msg, { position: "top-right" });
                navigate('/'); // Redirect to home page
            } else {
                toast.error("Unexpected response from the server");
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            toast.error("Failed to add user. Please try again.");
        }
    };

    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add New User</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' onChange={inputHandler} id='fname' name='fname' autoComplete='off' required />
                </div>

                <div className='inputGroup'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' onChange={inputHandler} id='lname' name='lname' autoComplete='off' required />
                </div>

                <div className='inputGroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' onChange={inputHandler} id='email' name='email' autoComplete='off' required />
                </div>

                <div className='inputGroup'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' onChange={inputHandler} id='password' name='password' autoComplete='off' required />
                </div>

                <div className='inputGroup'>
                    <button type='submit'>Add User</button>
                </div>
            </form>
        </div>
    );
};

export default Add;
