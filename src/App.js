import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root')

const state = {eventCount: 0, username: ''}

function App() {
  
  function handleClick() {
    setState({eventCount: state.eventCount + 1})
  }

  function handleChange(event) {
    setState({photo: event.target.value})
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Provide URL for Building Photo: </p>
        
        <p>
          <input onChange={handleChange} />
        </p>

        <p>The building is classified as: [built vs. construction] </p>
        
        <p>
          <img src={state.photo} height="200"/>
        </p>
        
        <a
          className="App-link"
          href="https://twitter.com/HBAkirmak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter: @HBAkirmak
        </a>
      </header>
    </div>
  );
}

function setState(newState) {
  Object.assign(state, newState)
  renderApp()
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'))
}
    
export default App;
