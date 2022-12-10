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

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const token = sessionStorage.getItem('token')
    axios.get('http://localhost:8080/users/current', {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    })
    .then(response => {
        setUser(response.data)
    })
    .catch(response => {
        console.log(response)
    })
  }, [isLoggedIn])



  return (
    <div className="App">
      <BrowserRouter>
        <Header setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/create-account' element={<CreateAccount />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/support' element={<SupportPage />}></Route>
          <Route path='/:category' element={<PostsPage />}></Route>
          <Route path='/:category/newpost' element={<CreatePost user={user} />}></Route>
          <Route path='/:category/:postId/comments' element={<ThreadPage user={user} />}></Route>
          <Route path='/dashboard' element={<Dashboard user={user} />}></Route>
          <Route path='/coaches' element={<FindCoachPage user={user} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
