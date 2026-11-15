import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/index";
import Books from "./Pages/books";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";
import Team from "./Pages/team";
import Contact from "./Pages/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;