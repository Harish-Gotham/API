
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import Defaulttheme from './themes/Defaulttheme';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';
import Account from './pages/Account/Account';
import Login from './pages/authentication/Login';
import Server from './pages/authentication/Server';
import Signup from './pages/authentication/Signup';
import CoursesList from './pages/Courses/CoursesList';
import Search from './components/navbar/Search';

function App() {
  const [loggedin,setLoggedin]=useState(false);
  useEffect(()=>{
      if (localStorage.getItem("user")){
        setLoggedin(true)

      }
      else{
         setLoggedin(false)
         
         

      }




  },[loggedin,localStorage.getItem("user")])
  return (
   
    <div className="App">
    <BrowserRouter>
    
    <Defaulttheme>
      <>
    <Routes>
      <Route path='/account' element={loggedin?<Account name={"Harish"} age={21}/>:<Login/>}/>
      <Route path="/home/:username" element={<Home/>}></Route>
      <Route path="/login" element={<Server/>}></Route>
      <Route path="/logins" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path='/courselist' element={<CoursesList/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
    </Routes>
    </>
    </Defaulttheme>
  </BrowserRouter>

    
    </div>
  );
}

export default App;
