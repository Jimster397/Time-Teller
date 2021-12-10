import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './Navbar';
import LoginPage from "./LoginPage";
import './index.css';
import WatchPage from "./WatchPage";



function App() {
  const [user, setUser] = useState(null);
  const [otherUser, setOtherUser] = useState([])
  const [watches, setWatches] = useState([])
 

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  useEffect(() => {
    fetch("/users").then((resp) => {
      if (resp.ok) {
        resp.json().then(setOtherUser);
      }
    });
  }, [user]);
  console.log(otherUser)

  useEffect(() => {
    fetch("/watches").then((resp) => {
      if (resp.ok) {
        resp.json().then(setWatches);
      }
    });
  }, [user]);
  console.log(watches)


  if (!user){
    return <LoginPage setUser={setUser}/>
  }
  return (
    <div className="App">
      <h1>Time Teller</h1>
      <BrowserRouter>
     <NavBar setUser= {setUser}/> 
     <Switch>
        <Route exact path = '/'>
         
         
            </Route>
            <Route path = '/watches'>
              <WatchPage  setUser={setUser} user = {user} otherUser = {otherUser} watches={watches}/>
             

              </Route>
      </Switch>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
