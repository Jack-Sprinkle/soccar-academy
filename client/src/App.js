import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Import pages and components
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import SupportPage from './pages/SupportPage/SupportPage';
import PostsPage from './pages/PostsPage/PostsPage';
import ThreadPage from './pages/ThreadPage/ThreadPage';
import Dashboard from './pages/Dashboard/Dashboard';
import FindCoachPage from './pages/FIndCoachPage/FindCoachPage';
import CreatePost from './pages/CreatePost/CreatePost';
import CreateAccount from './pages/CreateAccount/CreateAccount';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/create-account' element={<CreateAccount />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/support' element={<SupportPage />}></Route>
          <Route path='/:category' element={<PostsPage />}></Route>
          <Route path='/:category/newpost' element={<CreatePost />}></Route>
          <Route path='/:category/:postId/comments' element={<ThreadPage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/coaches' element={<FindCoachPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
