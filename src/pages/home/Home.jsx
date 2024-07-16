import React from 'react';
import { games } from '/src/resources/db/games';
import { Link } from "react-router-dom";


const Home = () => {
    return (
    <>
      <h1 className='homeTitle'>Home</h1>
      <div className='gameAlign'>
      {games.map((game) => (
      <Link to={game.link} className='gameA'>
      <div className='gameMap'  key={game.id}>
        <div className='gameName'>
          <h2 className='gameTitle'>
            {game.name}
          </h2>
        </div>
        <div className='gameId'><span>Id:{game.id}</span></div>
        <div className='gamePhoto'>
          <img src={game.photo}></img>
        </div>
        <div className='gamePrice'>
          <button>{game.price}</button>
        </div>
      </div>
      </Link>
      ))};
    </div>
    </>
    );
  };
  
  export default Home;