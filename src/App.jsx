import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/singup/Singup";

function App() {
  return (
    <div  className="bg-primary h-screen" >
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
