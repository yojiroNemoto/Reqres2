import React from 'react';
import './App.css';
import Icon from './sample.jpg'

function App() {
  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1>
      <ul className="profiles">
        <li className="profile">
          <h2>name1</h2>
          <h3>name1@example.com</h3>
          <img src={Icon} alt="アイコン" /> 
        </li>
        <li className="profile">
          <h2>name2</h2>
          <h3>name2@example.com</h3>
          <img src={Icon} alt="アイコン" /> 
        </li>
        <li className="profile">
          <h2>name3</h2>
          <h3>name3@example.com</h3>
          <img src={Icon} alt="アイコン" /> 
        </li>
        <li className="profile">
          <h2>name4</h2>
          <h3>name4@example.com</h3>
          <img src={Icon} alt="アイコン" /> 
        </li>
        <li className="profile">
          <h2>name5</h2>
          <h3>name5@example.com</h3>
          <img src={Icon} alt="アイコン" /> 
        </li>
        <li className="profile">
          <h2>name6</h2>
          <h3>name6@example.com</h3>
          <img src={Icon} alt="アイコン" /> 
        </li>
      </ul>
    </div>  
  );
}

export default App;

