import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';


let initialValues = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
};

const RescheduleFormPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewAppointment)

    async function postNewAppointment() {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/patients/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate('/') //add endpoint taking to page for selecting appoint day and time
        } catch (error) {
            console.log(error.message)
            
        }
    }


    return ( 
        <div className="container">
            <h2>{user.username}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    First Name:{" "}
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Last Name:{" "}
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Phone Number:{" "}
                    <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Email:{" "}
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </label>
                <button>Add Patient</button>
            </form>
        </div>
     );
}
 
export default RescheduleFormPage;