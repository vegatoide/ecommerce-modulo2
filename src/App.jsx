import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";
import AssasinsCreed from "./pages/AssasinsCreed"
import Granblue from "./pages/Granblue"
import DragonsDogma from "./pages/DragonsDogma"
import SuperMarioRpg from "./pages/SuperMarioRpg"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="AssasinsCreed" element={<AssasinsCreed />} />
          <Route path="DragonsDogma" element={<DragonsDogma />} />
          <Route path="SuperMarioRpg" element={<SuperMarioRpg />} />
          <Route path="Granblue" element={<Granblue />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);