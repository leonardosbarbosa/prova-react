import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Routes } from './routes';
import Footer from './components/template/Footer/Footer';
import Header from './components/template/Header/Header';
import Sidebar from './components/template/Sidebar/Sidebar';

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
