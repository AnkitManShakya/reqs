import React, { useEffect, useState } from "react";
import UserCard from "../userCard/UserCard";
import "./UserList.css";

export default function UserList({ loggedIn }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((Response) => Response.json())
      .then((Res) => setUsers(Res.data));
  }, []);
  console.log(users);

  if (loggedIn) {
    return (
      <div className="user-List">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    );
  } else {
    return <div>Not LoggedIn</div>;
  }
}
