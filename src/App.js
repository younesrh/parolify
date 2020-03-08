import React, { useState } from "react";
import "./app.scss";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <span>Parolify</span>
        </div>
        <div className="menu">
          <ul>
            <li>Songs</li>
          </ul>
        </div>
      </div>

      <div className="main">
        <div className="title">
          <h1>Best ressource to find lyrics online.</h1>
        </div>
        <div className="subtitle">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nulla
            sapiente, dignissimos, repudiandae vel cum natus quam fugiat
            nesciunt dolore, consectetur quis officia. Suscipit possimus beatae
            ratione voluptas aliquam iure.
          </p>
        </div>
        <div className="search-bar">
          <form
            onSubmit={event => {
              event.preventDefault();
              console.log(searchValue);
            }}
          >
            <input
              type="text"
              name="search"
              value={searchValue}
              placeholder="Search for lyrics or songs"
              onChange={event => {
                setSearchValue(event.target.value);
              }}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
