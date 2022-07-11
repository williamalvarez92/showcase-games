import logo from './logo.svg';
import './Dashboard.css';
import NavBar from './components/nav-bar';
import App from '../Games/GitHubCards/githubcards.js'

function Dashboard() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    <App />      
    </div>
  );
}

export default Dashboard;
