import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Contact from './components/Contact.js';

export default function App() {
  return (
    <div>
        <Home />
        <Contact />
    </div>
  );
}