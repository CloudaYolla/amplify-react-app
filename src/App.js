import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';


const state = {predclass: '', predprob: ''}

function App() {
  
  function handleChange(event) {
    setState({photourl: event.target.value})

    // 9Dec 18:42 API - MVP
    const api = 'https://4l8y23efu7.execute-api.us-east-1.amazonaws.com/Prod/invocations';
    
    const data = '{ "url" : "' + state.photourl + '" }';
    
    axios
      .post(api, data)
      .then((response) => {
        setState({ predclass: response.data.class});
        setState({ predprob: response.data.probability});
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

        <p> Provide a URL for a Building Photo </p>

        <p>
          <input onChange={handleChange}/>
        </p>

        <p>The building is classified as: {state.predclass} </p>
        <p>Confidence % : {state.predprob} </p>
        <p>
          <img src={state.photourl} height="200" alt="" />
        </p>
        
        <p style={{fontSize: '12px'}}>
            URL you entered: {state.photourl}
        </p>
        
        <p style={{fontSize: '12px'}}>
        The ML model implemented with fastai & deployed to AWS Lambda as a Container. Front end is on AWS Amplify
        </p>
        <a
          className="App-link"
          href="https://twitter.com/HBAkirmak/"
          target="_blank"
          rel="noopener noreferrer"
          style={{fontSize: '10px'}}
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
