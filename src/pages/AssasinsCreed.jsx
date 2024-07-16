import { games } from '/src/resources/db/games';

const AssasinsCreed = () => {

    const actualGame = games.filter(game => game.id === '4')

    return(
        <>
    <div className='gameAlign'>
        {actualGame.map((game) =>(
    <div className='items-center'  key={game.id}>
        <div className='gameName'>
          <h2>
            {game.name}
          </h2>
        </div>
        <div className='gamePhoto'>
          <img src={game.photo} className='gameImg'></img>
        </div>
        <div className='gamePrice'>
          <p>{game.price}</p>
        </div>
        <div className='gameDescription'>
          <p>{game.description}</p>
        </div>
        <button className='buyButton'>Buy</button>
    </div>
        ))};
        </div>
        </>
    )
    }

    export default AssasinsCreed;