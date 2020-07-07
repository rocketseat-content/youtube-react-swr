import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/users').then(response => {
      response.json().then(users => {
        setData(users);
      });
    })
  }, []);

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UserList;