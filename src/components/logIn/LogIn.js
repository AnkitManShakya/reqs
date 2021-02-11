import React, { useState } from "react";
import "./LogIn.css";
import $ from 'jquery'

export default function LogIn({ loggedIn, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signOut = () => {
    setLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     $.ajax({
      url: "https://reqres.in/api/login",
      type: "POST",
      data: {
          email : email,
          password: password
      },
      success: function(response){
        if (response.token) {
            setLoggedIn(true)
          }
      }
  });
    
  //   const response = await fetch(, {
  //     method: "POST",
  //     body: JSON.stringify({email , password}),
  //   })
  //     .then((response) => response.json())
  //     .then(json => console.log(json))
  //     .catch((err) => {
  //       console.log("err");
  //     });
    
    
  };

  if (loggedIn) {
    return (
      <div>
        <span>Logged In</span>
        <span>
          <button onClick={signOut}> Sign Out </button>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>email</label>
            <br />
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Sign In</button>
            <br />
          </fieldset>
        </form>
      </div>
    );
  }
}
