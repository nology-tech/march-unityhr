// Import the functions you need from the SDKs you need
import MainScreen from "./containers/MainScreen/MainScreen";

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


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <MainScreen />
    </div>
  );
};

export default App;
