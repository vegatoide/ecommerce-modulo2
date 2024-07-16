import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, db } from "/src/resources/firebase.js";
import { doc, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router";


const RegisterF = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const schema = object({
    name: string()
      .required("A name is required.")
      .max(25, "Your name must be shorter than 25 characters."),
    username: string()
      .required("A username is required.")
      .min(3, "Your username must be longer than 3 characters.")
      .max(15, "Your username must be shorter than 15 characters."),
    email: string().email("Invalid email")
      .required("An email is required."),
    password: string()
      .required("A password is required.")
      .matches(passwordRules, { message: "Your password must contain at least 5 characters, a lowercase letter, an uppercase letter and a number." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      
      console.log('User created:', userCredential.user);
      window.alert('You have been registered.')
      Navigate("/")
      await setDoc(doc(db, "users", data.email), data);
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.error(errorCode);
      console.error(errorMessage);
      window.alert('Email already in use.');
    }
  };

  return (
    <div className="app">
      <h1 className="mt-2 d-flex flex-center">Join our community!</h1>
      <div className="line"></div>
      <form
        className="mt-2 d-flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="d-flex">
          <label htmlFor="name" className="label">
            User <span>&#58;</span>
          </label>
          <div className="d-flex flex-col input-field">
            <input
              type="text"
              {...register("username")}
              className="input"
              id="username"
            />
            <p className="errorinput">{errors.username?.message}</p>
          </div>
        </div>
        <div className="d-flex">
          <label htmlFor="name" className="label">
            Name <span>&#58;</span>
          </label>
          <div className="d-flex flex-col input-field">
            <input
              type="text"
              {...register("name")}
              className="input"
              id="name"
            />
            <p className="errorinput">{errors.name?.message}</p>
          </div>
        </div>
        <div className="d-flex">
          <label htmlFor="surname" className="label">
            Surname <span>&#58;</span>
          </label>
          <div className="d-flex flex-col input-field">
            <input
              type="text"
              {...register("surname")}
              className="input"
              id="surname"
            />
            <p className="errorinput">{errors.surname?.message}</p>
          </div>
        </div>
        <div className="d-flex">
          <label htmlFor="email">
            Email{"  "}
            <span>&#58;</span>
          </label>
          <div className="d-flex flex-col input-field">
            <input
              type="email"
              {...register("email")}
              id="email"
              className="input"
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
            />
            <p className="errorinput">{errors.password?.message}</p>
          </div>
        </div>
        <button className="btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default RegisterF;
