import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './LoginStyles.css';

const Login = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
  const schema = object({
    username: string()
      .required("Name is required"),
    password: string()
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    window.alert(`Welcome, ${data.username}!`);
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
            User <span>&#58;</span>
          </label>
          <div className="d-flex flex-col input-field">
            <input
              type="text"
              {...register("username")}
              className="input"
              id="name"
            />
            <p className="errorinput">{errors.username?.message}</p>
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
      <a
        href="https://github.com/MrYogesh0709/registraion-form"
        target="_blank"
        rel="noreferrer"
      >
      </a>
    </div>
  );
}

export default Login;
