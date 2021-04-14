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
          <div className="title text-center mb-5">
            <h1>Dictionary</h1>
            <h2>What word do you want to look up?</h2>
          </div>

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
