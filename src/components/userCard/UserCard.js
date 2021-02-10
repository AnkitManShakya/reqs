import React from 'react'
import "./UserCard.css"

export default function UserCard({ user }) {
    return (
        <div className="user-card">
            <>
            <img src={user.avatar} />
            <span>{user.id}</span>
            <span>{user.first_name}</span>
            <span>{user.last_name}</span>
            <span>{user.email}</span>
            </>
        </div>
    )
}
 