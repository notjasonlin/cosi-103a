import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from './dropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/avocado-transparent.png" alt="Logo" className="App-logo" />
        <div className="Header-content">
          <div>Avocado Inc.</div>
          <div className="Subtitle">Delicious Recipes</div>
        </div>
      </header>

      <div className="App-body">
        <DropDown />
      </div>

      <footer className="footer">
        <h2 id="copyright">© 2024 Avocado Inc.</h2>
        <a href="https://facebook.com" class="fa fa-facebook" ></a>
        <a href="https://twitter.com" class="fa fa-twitter" ></a>
        <a href="https://youtube.com" class="fa fa-youtube"></a>
        <a href="https://instagram.com" class="fa fa-instagram"></a>
        <a href="https://linkedin.com" class="fa fa-linkedin"></a>
      </footer>
    </div>
  );
}


export default App;
