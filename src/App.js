import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';


const rootElement = document.getElementById('root')

const state = {eventCount: 0, username: ''}

function App() {
  
  function handleClick() {
    setState({eventCount: state.eventCount + 1})
  }

  function handleChange(event) {
    setState({photo: event.target.value})
    
    const api = 'https://g1sl8z5hse.execute-api.us-east-1.amazonaws.com/Prod/invocations';
    const data = { url : 'https://mkenyaujerumani.de/wp-content/uploads/2016/09/House-under-construction.jpg' };

    axios
      .post(api, data)
      .then((response) => {
        setState({predictionResp: response});
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      

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
        <p>predictionResp: {state.predictionResp} </p>
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
