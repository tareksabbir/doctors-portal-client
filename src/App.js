import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";

import Home from "./Pages/Home/Home";
import MakeAppointment from "./Pages/Home/MakeAppointment";
import Service from "./Pages/Home/Service";
import Login from "./Pages/Login/Login";
import Reviews from "./Pages/Reviews/Reviews";

import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/appointment" element={<Appointment></Appointment>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/review" element={<Reviews></Reviews>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/make" element={<MakeAppointment></MakeAppointment>}></Route>
        </Routes>
      </Navbar>




    </>
  );
}

export default App;
