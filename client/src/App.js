import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserLogin from "./components/Registration_Login/Login/UserLogin";
import UserRegistration from "./components/Registration_Login/Registration/UserRegistration";

function App() {
  return (
    <div className="App">
      <h2>Navigation Bar</h2>
      <UserLogin />
      <UserRegistration />
    </div>
  );
}

export default App;
