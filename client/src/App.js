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

import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const API_URL = process.env.REACT_APP_API_URL

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)

  //handle login on submit of login form
  const handleLogin = (values) => {
    const user = {
        user_email: values.email,
        user_password: values.password
    }
    axios.post(`${API_URL}/users/login`, user)
        .then(response => {
          sessionStorage.setItem('token', response.data.token);
          setIsLoggedIn(true);
          return axios.get(`${API_URL}/users/current`, {
            headers: {
              Authorization: `Bearer: ${response.data.token}`
            }
          })
        }).then(response => {
          setUser(response.data)
          setErrorMessage(false)
        }).catch(error => {
          setErrorMessage(true)
        })
  
  }

  //if user refresh page, check if the user still has token from session and set logged in and user.
  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if(!token) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
      axios.get(`${API_URL}/users/current`, {
        headers: {
          Authorization: `Bearer: ${token}`
        }
      }).then(response => {
        setUser(response.data)
      })
    }
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Header handleLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUser={setUser} user={user} errorMessage={errorMessage}/>
        <Routes>
          <Route path='/' element={<HomePage isLoggedIn={isLoggedIn} />}></Route>
          <Route path='/create-account' element={<CreateAccount isLoggedIn={isLoggedIn} />}></Route>
          <Route path='/about' element={<AboutPage isLoggedIn={isLoggedIn} />}></Route>
          <Route path='/support' element={<SupportPage isLoggedIn={isLoggedIn} />}></Route>
          <Route path='/:category' element={<PostsPage isLoggedIn={isLoggedIn} />}></Route>
          <Route path='/:category/newpost' element={<CreatePost user={user} isLoggedIn={isLoggedIn} />}></Route>
          <Route path='/:category/:postId/comments' element={<ThreadPage user={user} isLoggedIn={isLoggedIn} />}></Route>
          <Route path='/dashboard' element={<Dashboard user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}></Route>
          <Route path='/coaches' element={<FindCoachPage user={user} isLoggedIn={isLoggedIn} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
