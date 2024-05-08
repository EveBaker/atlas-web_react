import './App.css';
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  const isIndex = true;

  const handleLableClick = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
      }
    };
  
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <br></br>

        {/* Labels and Inputs for Email and Password */}
        <div class="inputs">
          <label htmlFor="email" onClick={() => handleLableClick('email')}>
            Email:
          </label>
          <input type="email" id="email" />
        </div>
        <div class="inputs">
          <label htmlFor="password" onClick={() => handleLableClick("password")}>
            Password:
          </label>
          <input type="password" id="password"/>
        </div>
        {/* OK Button */}
        <button type="button" class="input">OK</button>
      </div>
      <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      </div>
    </div>
  );
}

export default App;