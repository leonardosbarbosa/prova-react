import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Routes } from './routes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <Header/>
    <Router>
    <Sidebar/>
      <Routes/>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
