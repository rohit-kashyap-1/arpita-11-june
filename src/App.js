import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';

//string, number
//object
//json: console
//send to api
function App() {
  return (
    <div className="App">
      <div className='form'>
      <Login />
      </div>
    </div>
  );
}

export default App;
