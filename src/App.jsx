// Import the functions you need from the SDKs you need
import "./App.scss";

import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationPages from "./containers/AuthenticationPages/AuthenticationPages";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import MainScreen from "./containers/MainScreen/MainScreen";
import NotificationBoard from "./containers/NotificationBoard/NotificationBoard";
import MyTicketsBoard from "./containers/MyTicketsBoard/MyTicketsBoard";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import SettingsMenu from "./components/SettingsMenu/SettingsMenu";

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
          <Route path="/dashboard" element={<MainScreen />}>
            <Route index element={<MyTicketsBoard />}/>
            <Route path="/dashboard/tickets" element={<MyTicketsBoard />} />
            <Route path="/dashboard/notifications" element={<NotificationBoard />} />
            <Route path="/dashboard/employees" element={<EmployeeList /> } />
            <Route path="/dashboard/settings" element={<SettingsMenu />} />
          </Route>
          <Route path="/change-password" element={<ChangePassword />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
