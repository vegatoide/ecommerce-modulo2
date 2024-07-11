import { games } from "/src/resources/db/games";

const Granblue = () => {

    const actualGame = games.filter(game => game.id === '1');

    return(
        <>
        {actualGame.map((game) =>(
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
        <div className='gameDescription'>
          <p>{game.description}</p>
        </div>
        <button>Buy</button>
    </div>
        ))};
        </>
    )
    }

    export default Granblue;