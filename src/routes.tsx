import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';

const ManyUserLists = () => (
  <>
    <UserList />
    <UserList />
    <UserList />
  </>
);

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManyUserLists />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}