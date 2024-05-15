import React, { useState, useEffect } from "react";
import "./onlineFeed.css";
import User from "./User";

export default function OnlineFeed() {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState(
    localStorage.getItem("nameFilter") || ""
  );
  const [sortBy, setSortBy] = useState(
    localStorage.getItem("sortBy") || "username"
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem("nameFilter", nameFilter);
  }, [nameFilter]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((apiResult) => apiResult.json())
      .then((data) => {
        setUsers(data);
      });
  };

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredUsers = users
    .filter((user) =>
      user.username.toLowerCase().includes(nameFilter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "username") {
        return a.username.localeCompare(b.username);
      } else if (sortBy === "email") {
        return a.email.localeCompare(b.email);
      }
      return 0;
    });

  return (
    <div className="main-container">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Filter by name..."
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="username">Sort by Username</option>
          <option value="email">Sort by Email</option>
        </select>
      </div>
      <div className="users-container">
        <h2>Users</h2>
        <div className="users">
          {filteredUsers.map((user, index) => (
            <User
              key={index}
              username={user.username}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
