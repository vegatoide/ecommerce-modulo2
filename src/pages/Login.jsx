import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "/src/resources/firebase.js";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import './LoginStyles.css';

const Login = () => {
  const schema = object({
    email: string().email("Invalid email")
      .required("An email is required."),
    password: string()
      .required("A Password is required."),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/');
      alert('You have succesfuly logged in!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="app">
      <h1 className="mt-2 d-flex flex-center">Login</h1>
      <div className="line"></div>
      <form
        className="mt-2 d-flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
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
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
