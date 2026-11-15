import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";
import Team from "./Pages/team";
import Contact from "./Pages/contact";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
