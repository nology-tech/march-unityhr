// Import the functions you need from the SDKs you need
import "./App.scss";

import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationPages from "./containers/AuthenticationPages/AuthenticationPages";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import MainScreen from "./containers/MainScreen/MainScreen";
<<<<<<< HEAD
import CreateTicket from "./components/CreateTicket/CreateTicket";
import EditTicket from "./components/EditTicket/EditTicket";
=======
import NotificationBoard from "./containers/NotificationBoard/NotificationBoard";
import MyTicketsBoard from "./containers/MyTicketsBoard/MyTicketsBoard";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import SettingsMenu from "./components/SettingsMenu/SettingsMenu";
import Workspace from "./containers/Workspace/Workspace";

>>>>>>> 71770d01be8b9d945b1a6eb97e96fbdffc89d116
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
            <Route path="/dashboard/Workspace" element={<Workspace />} />
            <Route index element={<MyTicketsBoard />} />
            <Route path="/dashboard/tickets" element={<MyTicketsBoard />} />
            <Route
              path="/dashboard/notifications"
              element={<NotificationBoard />}
            />
            <Route path="/dashboard/employees" element={<EmployeeList />} />
            <Route path="/dashboard/settings" element={<SettingsMenu />} />
          </Route>
          <Route path="/change-password" element={<ChangePassword />}></Route>
          <Route path="/create-ticket" element={<CreateTicket />}></Route>
          <Route path="/edit-ticket" element={<EditTicket />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
