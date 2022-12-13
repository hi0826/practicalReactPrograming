import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Rooms from './Rooms';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: '5px solid gray' }}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/photo">Photo</Link>
        <br />
        <Link to="/rooms">Room introduction</Link>
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/rooms/*" element={<Rooms />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Photo() {
  return <h2>Photo</h2>;
}
