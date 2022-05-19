import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import AllDoctors from "./Pages/Dashboard/AllDoctors";
import Dashboard from "./Pages/Dashboard/Dashboard";
import History from "./Pages/Dashboard/History";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";

import Home from "./Pages/Home/Home";
import MakeAppointment from "./Pages/Home/MakeAppointment";
import Service from "./Pages/Home/Service";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Reviews from "./Pages/Reviews/Reviews";

import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/appointment"
            element={
              <RequireAuth>
                <Appointment></Appointment>
              </RequireAuth>
            }
          ></Route>
          <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path="reviews" element={<MyReview></MyReview>}></Route>
            <Route path="history" element={<History></History>}></Route>
            <Route path="doctors" element={<AllDoctors></AllDoctors>}></Route>
          </Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/review" element={<Reviews></Reviews>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/make" element={<MakeAppointment></MakeAppointment>}></Route>
        </Routes>
      </Navbar>




    </>
  );
}

export default App;
