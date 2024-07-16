import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './resources/context/AuthContext';
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";
import AssasinsCreed from "./pages/AssasinsCreed"
import Granblue from "./pages/Granblue"
import DragonsDogma from "./pages/DragonsDogma"
import SuperMarioRpg from "./pages/SuperMarioRpg"
import OnlyForYourEyes from "./pages/OnlyForYourEyes";


export default function App() {
  return (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="AssasinsCreed" element={<AssasinsCreed />} />
          <Route path="DragonsDogma" element={<DragonsDogma />} />
          <Route path="OnlyForYourEyes" element={<OnlyForYourEyes />} />
          <Route path="SuperMarioRpg" element={<SuperMarioRpg />} />
          <Route path="Granblue" element={<Granblue />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);