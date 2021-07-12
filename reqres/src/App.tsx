import React from 'react';
import './App.css';
import Icon from './sample.jpg'

interface User {
  name: string;
  email: string;
}

function App() {
  const users: User[] = [
    { name: 'name1', email: 'name1@example.com' },
    { name: 'name2', email: 'name2@example.com' },
    { name: 'name3', email: 'name3@example.com' },
    { name: 'name4', email: 'name4@example.com' },
    { name: 'name5', email: 'name5@example.com' },
    { name: 'name6', email: 'name6@example.com' },
    { name: 'name7', email: 'name7@example.com' },
    { name: 'name8', email: 'name8@example.com' },
    { name: 'name9', email: 'name9@example.com' },
    { name: 'name10', email: 'name10@example.com' },
    { name: 'name11', email: 'name11@example.com' },
    { name: 'name12', email: 'name12@example.com' },
    { name: 'name13', email: 'name13@example.com' },
    { name: 'name14', email: 'name14@example.com' },
    { name: 'name15', email: 'name15@example.com' },
    { name: 'name16', email: 'name16@example.com' },
    { name: 'name17', email: 'name17@example.com' },
    { name: 'name18', email: 'name18@example.com' },
    { name: 'name19', email: 'name19@example.com' },
    { name: 'name20', email: 'name20@example.com' },
  ];

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

