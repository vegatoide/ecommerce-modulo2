import React from 'react';
import { games } from '/src/resources/db/games';
import {  Link } from "react-router-dom";


const Home = () => {
    return (
    <>
      <h1>Home</h1>
      {games.map((game) => (
      <Link to={game.link}>
      <div className='items-center'  key={game.id}>
        <div className='gameName'>
          <h2>
            {game.name}
          </h2>
        </div>
        <div className='gamePhoto'>
          <img src={game.photo}></img>
        </div>
        <div className='gamePrice'>
          <p>{game.price}</p>
        </div>
      </div>
      </Link>
      ))}

    </>
    );
  };
  
  export default Home;