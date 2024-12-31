import Button from '../button/Button';
import {
	GameInCartContainer,
	GameInCartImage,
	GameInCartInfo,
	GameInCartTitle
} from './game-in-cart.styles';

const GameInCart = ({
	gameInCart,
	allGamesSameTitle,
	addGameToCart,
	removeGameFromCart
}) => {
	return (
		<GameInCartContainer>
			<GameInCartImage src={gameInCart.image} alt={gameInCart.title} />
			<GameInCartInfo>
				<GameInCartTitle>
					{gameInCart.title} - {gameInCart.plattform}
				</GameInCartTitle>
				<img
					src='/assets/images/trash.svg'
					alt='trash icon'
					onClick={() => removeGameFromCart(gameInCart)}
				/>
				<span>${gameInCart.price.toFixed(2)}</span>
			</GameInCartInfo>
			{allGamesSameTitle.length > 0 &&
				allGamesSameTitle.map(sameGame => (
					<Button key={sameGame} onClick={() => addGameToCart(sameGame)}>
						Buy for {sameGame.plattform} - ${sameGame.price.toFixed(2)}
					</Button>
				))}
		</GameInCartContainer>
	);
};

export default GameInCart;
