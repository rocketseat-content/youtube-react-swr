import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
}

const UserDetails: React.FC = () => {
  const { id } = useParams();
  const { data } = useFetch<User>(`users/${id}`);

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      <li>ID: {data?.id}</li>
      <li>Name: {data?.name}</li>
    </ul>
  );
}

export default UserDetails;