import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../components/FormInput";

function Register() {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formData;

    if (!displayName || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      console.log(userCredential.user); // Foydalanuvchi malumotlarini konsolga chiqarish
      toast.success("Registration successful!");
      navigate("/"); // home pagega otish
    } catch (error) {
      toast.error(error.message);
    }
    
  };

  return (
    <div className="h-screen grid place-items-center w-full">
      <form onSubmit={handleSubmit} className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl text-center mb-5 font-bold">Register</h2>
        <FormInput
          type="text"
          placeholder="Name"
          label="Display Name"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          placeholder="Email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          placeholder="Repeat Password"
          label="Repeat Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className="my-5">
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </div>
        <div className="text-center">
          <p>
            If you have an account,{" "}
            <Link className="link link-primary" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
