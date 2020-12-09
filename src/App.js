import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';

// const rootElement = document.getElementById('root')

const state = {predclass: '', predprob: ''}

function App() {
  
  // function handleClick() {
  //   setState({eventCount: state.eventCount + 1})
  // }

  function handleChange(event) {
    setState({photourl: event.target.value})

    // 8Dec 22:42 API - actual one via sam build
    // const api = 'https://4l8y23efu7.execute-api.us-east-1.amazonaws.com/Prod';
    
    //8Dec 14:32 API - custom API with latest sam build 8Dec22:42 but with CORS. tested API Test, tested Lambda Test
    
    const api = 'https://f6lxgmn9a3.execute-api.us-east-1.amazonaws.com/prod'
    
    const data = '{ "url" : "' + state.photourl + '" }';
    
    // const data = { "body": "{\"url\": \"https://mkenyaujerumani.de/wp-content/uploads/2016/09/House-under-construction.jpg\"}" }

    // const hbadata = { "body": "{\"url\": \"{state.photo}\" }" }
    // const hbadata = "{ \"url\" : " + state.photo + " }";

    axios
      // .post(api, data)
      // .post(api, { url : 'https://mkenyaujerumani.de/wp-content/uploads/2016/09/House-under-construction.jpg' })
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

        <p>Provide a URL for a Building Photo </p>

        <p>
          <input onChange={handleChange} />
        </p>

        <p>The building is classified as: {state.predclass} </p>
        <p>Confidence % : {state.predprob} </p>
        <p>
          <img src={state.photourl} height="200" alt="" />
        </p>
        
        <p>
            URL you entered: {state.photourl}
        </p>
        
        <p>
        The ML model implemented with fastai & deployed to AWS Lambda as a Container. Front end is on AWS Amplify
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
