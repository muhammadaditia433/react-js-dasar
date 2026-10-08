import "./App.css";

/**
 * Membuat Component Header.
 * Component Header untuk menampilkan Navigasi.
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * Membuat Component Content.
 * Component Content untuk menampung konten utama.
 */
function Content() {
  return <h1>Content</h1>;
}

/**
 * Membuat Component Footer.
 * Component Footer untuk menampilkan informasi footer.
 */
function Footer() {
  return (
    <footer>
      <h2> NF Academy </h2>
      <p>Created with React JS</p>
    </footer>
  );
}

function Hello() {
  const nama = "Budi";
  return (
    <>
      <h2>Hello React</h2>
      <p>Saya {nama} - Seorang Frontend Developer</p>
    </>
  );
}

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Profile(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.country}</p>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Content />
      <Hello />
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Profile name="Budi" age={25} country="Indonesia" />
      <Footer />
    </>
  );
}

export default App;