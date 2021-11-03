import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Routes } from './routes';

function App() {
  return (
    <>
    <Router>
      <Routes/>
    </Router>
    </>
  );
}

export default App;
