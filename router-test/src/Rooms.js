import React from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';

function Rooms() {
  return (
    <div>
      <h2>Introduction Rooms page.</h2>
      <Link to="blueRoom"> blue Room </Link>
      <br />
      <Link to="greenRoom"> green Room </Link>
      <br />
      <Routes>
        <Route path=":roomId" element={<Room />} />
        <Route path="" element={<Init />} />
      </Routes>
    </div>
  );
}
export default Rooms;

function Init() {
  return <h3> select rooms</h3>;
}

function Room() {
  const { roomId } = useParams();
  return <h2>{`${roomId} Room`}</h2>;
}
