import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterF = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const schema = object({
    username: string()
      .required("A username is required.")
      .min(3, "Your username must be longer than 3 character.")
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

  const onSubmit = (data) => {
    console.log(data);
    window.alert(`Your account has been registered. Welcome, ${data.username}!`);
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
              id="name"
            />
            <p className="errorinput">{errors.username?.message}</p>
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
      <a
        href="https://github.com/MrYogesh0709/registraion-form"
        target="_blank"
        rel="noreferrer"
      >
      </a>
    </div>
  );
}

export default RegisterF;
