import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Name, Counter, User, Form, ClicksCounter, MouseMovement} from './components';
import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>Use Memo</h2>
      <ClicksCounter/>
      <br/>
      <hr/>
      <br/>
      <h2>Use Reducer</h2>
      <Form/>
      <br/>
      <hr/>
      <br/>
      <h2>Use State</h2>
      <Name/>
      <br/>
      <hr/>
      <br/>
      {/*<Counter />*/}
      <h2>Use Context</h2>
      <User/>
      <br/>
      <hr/>
      <br/>
      <h2>Use Effect</h2>
      <MouseMovement/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
