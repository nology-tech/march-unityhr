// Import the functions you need from the SDKs you need
import "./App.scss";
<<<<<<< HEAD
import ChangePassword from "./components/ChangePassword/ChangePassword";
=======
import MainScreen from "./containers/MainScreen/MainScreen";
import LoginPage from "./components/LoginPage/LoginPage";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

//test
>>>>>>> ce2ab2f2a3a3556a7d85788baf56ee33361ad94b
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDZCJW000uYAV8Vn2xn_0aEwjLyHfCNvvU",
  authDomain: "march-unityhr-d1404.firebaseapp.com",
  databaseURL: "https://march-unityhr-d1404-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "march-unityhr-d1404",
  storageBucket: "march-unityhr-d1404.appspot.com",
  messagingSenderId: "248434926957",
  appId: "1:248434926957:web:59af8d32d0fbb8b25d6664",
  measurementId: "G-Z8WNYTW1QG"
};

// test1//
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="app">
        <LoginPage />
        <ForgotPassword />
        <ChangePassword />
        <MainScreen />
    </div>
  );
};

export default App;
