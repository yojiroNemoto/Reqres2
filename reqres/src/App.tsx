import React, { useCallback, useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import axios from 'axios';

interface Response {
  data: User[];
}

interface User {
  last_name: string;
  first_name: number;
  email: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const onClickButton: () => Promise<void> = useCallback(async () => {
    const response: Response = // TODO: ここに通信処理を記載
    setUsers(response.data)
  }, [setUsers])

  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1>
      <div className="profiles">
      {users.length < 1
        ? <button onClick={onClickButton}>データを取得する</button>
        : users.map((user) => {
          return (
            <Profile
              name={`${user.first_name} ${user.last_name}`}
              email={user.email}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
