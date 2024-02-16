"use client";
import React, { useState } from "react";
import "../auth.css";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.ok) {
        
        //Handle successful login, e.g., show a success message
        console.log('Admin login successful', data);
  
        toast.success('Admin Login Successful', {
          // Modified here.. 5-10935
          position: "top-center",
        });
        window.location.href = '/pages/addworkout';
      } else {
        //Handle login error
        console.log('Admin login failed', response.statusText);
        toast.error('Admin Login Failed', {
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
      <button onClick={handleSignup}>Login</button>
    </div>
  );
};

export default LoginPage;
