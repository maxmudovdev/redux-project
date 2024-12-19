import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../components/FormInput";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser); // Foydalanuvchini konsolga chiqarish
      toast.success("Login successful!");
      navigate("/"); // Navigate to Home page
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="h-screen grid place-items-center w-full">
      <form onSubmit={handleSubmit} className="max-w-96 mx-auto w-full">
        <h2 className="text-4xl text-center mb-5 font-bold">Login</h2>
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
        <div className="my-5">
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </div>
        <div className="text-center">
          <p>
            If you don't have an account,{" "}
            <Link className="link link-primary" to="/register">
              Register
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
