import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "/src/resources/firebase.js";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import './LoginStyles.css';

import React, { useState } from 'react';
import { useAuth } from '/src/resources/context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  const schema = object({
    email: string().email("Invalid email")
      .required("An email is required."),
    password: string()
      .required("A Password is required."),
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  return (
    <div className="app">
      <h1 className="mt-2 d-flex flex-center">Login</h1>
      <div className="line"></div>
      <form
        className="mt-2 d-flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <div className="d-flex">
          <label htmlFor="name" className="label">
            Email <span>&#58;</span>
          </label>
          <div className="d-flex flex-col input-field">
            <input
              type="email"
              {...register("email")}
              className="input"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorinput">{errors.email?.message}</p>
          </div>
        </div>
        <div className="d-flex">
          <label htmlFor="password">
            Password {"  "}
            <span>&#58;</span>
          </label>
          <div className="d-flex flex-col input-field">
            <input
              type="password"
              {...register("password")}
              id="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorinput">{errors.password?.message}</p>
          </div>
        </div>
        <button className="btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;