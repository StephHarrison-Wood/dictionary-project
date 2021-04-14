import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>

        <main>
          <Dictionary />
        </main>
        <footer className="App-footer mt-5">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/StephHarrison-Wood/dictionary-project"
              target="_blank"
            >
              Stephanie Harrison-Wood
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
