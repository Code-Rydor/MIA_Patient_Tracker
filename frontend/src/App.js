// General Imports
import { Routes, Route} from "react-router-dom";
import "bootswatch/dist/morph/bootstrap.min.css";


// Pages Imports
import MIAHomePage from "./pages/HomePage/MIAHomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RescheduleFormPage from "./pages/RescheduleFormPage/RescheduleFormPage";
import ToBeContactedPage from "./pages/ToBeContactedPage/ToBeContactedPage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import EmailPage from "./pages/EmailPage/EmailPage";
import RegisterUserPage from "./pages/RegisterUserPage/RegisterUserPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MIAHomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/makeappointment" element={<PrivateRoute><RescheduleFormPage /></PrivateRoute>} />
        <Route path="/tobecontacted" element={<PrivateRoute><ToBeContactedPage /></PrivateRoute>} />
        <Route path="/schedule" element={<PrivateRoute><SchedulePage /></PrivateRoute>} />
        <Route path="/email" element={<PrivateRoute><EmailPage /></PrivateRoute>} />
        <Route path="/addpatient" element={<PrivateRoute><RegisterUserPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
