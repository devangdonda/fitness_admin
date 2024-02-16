"use client";
import React, { useState } from "react";
import "../auth.css";
import { ToastContainer, toast } from "react-toastify";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/admin/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.ok) {
        
        //Handle successful signup, e.g., show a success message
        console.log('Admin registration successful', data);
  
        toast.success('Admin Registration Successful', {
          // Modified here.. 5-10935
          position: "top-center",
        });
      } else {
        //Handle signup error
        console.log('Admin registration failed', response.statusText);
        toast.error('Admin Registration Failed', {
          // Modified here.. 5-10935
          position: "top-center",
        });
      }
    }
    catch (error) {
      toast.error("An error occured during registration");
      console.log("An error occured during registration", error);
    }
  };
  return (
    <div className="formpage">
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
