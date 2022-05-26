import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "bootswatch/dist/morph/bootstrap.min.css";


const RegisterUserPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber:"",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="container">
      <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <label className="my-2">
          Username:{" "}
          <input
            className="rounded"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label className="my-2">
          First Name:{" "}
          <input
            className="rounded"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label className="my-2">
          Last Name:{" "}
          <input
            className="rounded"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label className="my-2">
          Phone Number:{" "}
          <input
            className="rounded"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <label className="my-2">
          Email:{" "}
          <input
            className="rounded"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label className="my-2">
          Password:{" "}
          <input
            className="rounded"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterUserPage;