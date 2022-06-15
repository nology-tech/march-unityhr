// Import the functions you need from the SDKs you need
import "./App.scss";

import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationPages from "./containers/AuthenticationPages/AuthenticationPages";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import MainScreen from "./containers/MainScreen/MainScreen";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import EditTicket from "./components/EditTicket/EditTicket";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>

          <Route
            path="/forgot-your-password"
            element={<AuthenticationPages />}
          ></Route>
          <Route path="/dashboard" element={<MainScreen />}></Route>
          <Route path="/change-password" element={<ChangePassword />}></Route>
          <Route path="/create-ticket" element={<CreateTicket />}></Route>
          <Route path="/edit-ticket" element={<EditTicket />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
