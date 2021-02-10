import './App.css';
import Header from "./components/header/Header";
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import UserList from "./components/userList/UserList";
import LogIn from "./components/logIn/LogIn"
import Navigation from "./components/navigation/Navigation"
import { useState } from 'react'


function App() {
  const [loggedIn, setLoggedIn ] = useState (false)

  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
          <Switch>
          <Route  path="/userList">
            <UserList loggedIn={loggedIn} />
          </Route>
          <Route exact path="/">
            <LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn }/>
          </Route>
        </Switch>
      </Router>
      
 
    </div>
  );
}

export default App;
