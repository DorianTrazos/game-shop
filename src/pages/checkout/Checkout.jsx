import { useContext } from 'react';
import MainContainer from '../../components/main-container/MainContainer';
import MainTitle from '../../components/main-title/MainTitle';
import { GAMES } from '../../constants/games-info';
import { CartContext } from '../../contexts/cart-context';

const Checkout = () => {
	const { cart, addGameToCart, removeGameFromCart } = useContext(CartContext);
	return (
		<MainContainer>
			<MainTitle>Checkout</MainTitle>
			{cart.map(gameInCart => {
				const allGamesSameTitle = searchGameInOtherPlattforms(gameInCart, cart);
				return (
					<div key={gameInCart.id}>
						<img src={gameInCart.image} alt={gameInCart.title} />
						<h2>
							{gameInCart.title} - {gameInCart.plattform}
						</h2>
						<span>${gameInCart.price.toFixed(2)}</span>
						<img
							src='/assets/images/trash.svg'
							alt='trash icon'
							onClick={() => removeGameFromCart(gameInCart)}
						/>
						{allGamesSameTitle.length > 0 &&
							allGamesSameTitle.map(sameGame => (
								<button key={sameGame} onClick={() => addGameToCart(sameGame)}>
									Buy for {sameGame.plattform}
								</button>
							))}
					</div>
				);
			})}
		</MainContainer>
	);
};

const searchGameInOtherPlattforms = (gameInCart, cart) => {
	const allGamesSameTitle = GAMES.filter(
		game => game.title === gameInCart.title && game.id !== gameInCart.id
	).filter(game => !cart.includes(game));

	// const removeDuplicatesInCart = allGamesSameTitle.filter(
	// 	game => !cart.includes(game)
	// );

	return allGamesSameTitle;
};

export default Checkout;
