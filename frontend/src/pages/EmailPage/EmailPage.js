import React, { useRef, useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import emailjs from '@emailjs/browser';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "bootswatch/dist/cerulean/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
//Toastify tutorial - https://www.youtube.com/watch?v=VdVGPov7Yqc

const EmailPage = () => {

    const [user, token] = useAuth();
    const [patientUsers, setPatientUsers] = useState([]);
    const [index, setIndex] = useState(0)
    const [currentPatient, setCurrentPatient] = useState({})
    const navigate = useNavigate()
    const form = useRef();

    useEffect(() => {
        getAllPatientUsers();
    }, [token]);

    const getAllPatientUsers = async () => {
    try {
        let response = await axios.get("http://127.0.0.1:8000/api/auth/users/patients/", {
        headers: {
            Authorization: "Bearer " + token,
        },
        });
        setPatientUsers(response.data);
        setCurrentPatient(response.data[0])
    } catch (error) {
        console.log(error.message);
    }
    };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result)
            toast(`Message Delivered ${result.text}`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
      }, (error) => {
          console.log(error.text);
        });
      setCurrentPatient(patientUsers[index + 1])
      setIndex(index + 1)
    //   navigate('/')
    };
    


    return (
        <form ref={form} onSubmit={sendEmail}>    
            <label>Name</label>
            <input type="text" name="user_name" value="Your Chiropractor" />
            <label>Email</label>
            <input type="email" name="receiving_email_address" value={currentPatient.email}/>
            <label>Message</label>
            <textarea name="message" value="Click the link below to make a new appointment today!"/>
            <button type="submit" value="Send">Send</button>
            <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            />
        </form>
    );
}
 
export default EmailPage;