import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/singup/Singup";

function App() {
  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="h-screen bg-primary">
      {isAuthReady ? (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate replace={true} to="/login" />}></Route>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />}></Route>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        "loading ..."
      )}
    </div>
  );
}

export default App;
