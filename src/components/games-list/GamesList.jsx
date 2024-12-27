import Game from '../game/Game';

const GamesList = ({ games }) => {
	if (games.length === 0) return <p>No Games</p>;
	return (
		<div>
			{games.map(game => (
				<Game key={game.id} game={game} />
			))}
		</div>
	);
};

export default GamesList;
