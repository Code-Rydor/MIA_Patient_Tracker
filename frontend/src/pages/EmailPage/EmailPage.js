import React, { useRef, useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import emailjs from '@emailjs/browser';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//Toastify tutorial - https://www.youtube.com/watch?v=VdVGPov7Yqc

const EmailPage = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
        .then((result) => {
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
  };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" value="Hello" />
            <label>Email</label>
            <input type="email" name="user_email" value="Hello2"/>
            <label>Message</label>
            <textarea name="message" value="link to page"/>
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