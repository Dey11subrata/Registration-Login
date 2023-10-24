import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserLogin from "./components/Registration_Login/Login/UserLogin";
import UserRegistration from "./components/Registration_Login/Registration/UserRegistration";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Navigation Bar</h2>
      <Routes>
        <Route path="/" Component={UserLogin} />
        <Route path="register" Component={UserRegistration} />
      </Routes>
    </div>
  );
}

export default App;
