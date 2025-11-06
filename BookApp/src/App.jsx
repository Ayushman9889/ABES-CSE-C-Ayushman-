import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import Book from './components/Book';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;