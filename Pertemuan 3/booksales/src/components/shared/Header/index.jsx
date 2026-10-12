import { Link } from "react-router";

export default function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <i
            className="fa-solid fa-book fa-2xl"
            style={{ color: "#74C0FC" }}
            aria-hidden="true"
          />
          <span className="ms-2 fs-4">bookstore</span>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/books" className="nav-link px-2">
            Book
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link px-2">
            Team
          </Link> 
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link px-2">
            Contact
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login" className="btn btn-primary me-2">
          Login
        </Link>
        <Link to="/register" className="btn btn-primary">
          Register
        </Link>
      </div>
    </header>
  );
}
