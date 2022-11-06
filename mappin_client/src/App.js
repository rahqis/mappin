import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/login";
import Maps from "./components/maps";
import Form from "./components/signup";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
    else navigate("/signin");
  }, [user, loading]);

  return (
    <div className='App'>
      <Maps />
    </div>
  );
}

export default App;
