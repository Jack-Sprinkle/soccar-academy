import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Import pages and components
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import SupportPage from './pages/SupportPage/SupportPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/support' element={<SupportPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
