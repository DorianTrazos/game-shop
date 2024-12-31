import { useContext } from 'react';
import Container from '../../components/container/Container';
import { StyledTextFlex } from '../../components/container/container-styles';
import EmptyCart from '../../components/empty-cart/EmptyCart';
import GameInCart from '../../components/game-in-cart/GameInCart';
import MainContainer from '../../components/main-container/MainContainer';
import MainTitle from '../../components/main-title/MainTitle';
import { GAMES } from '../../constants/games-info';
import { CartContext } from '../../contexts/cart-context';

const Checkout = () => {
	const { cart, addGameToCart, removeGameFromCart } = useContext(CartContext);
	const subtotal = cart.reduce((acc, gameInCart) => gameInCart.price + acc, 0);

	const total = (subtotal + subtotal * 0.21).toFixed(2);
	const giftCardAmount = (total * 0.1).toFixed(2);
	if (cart.length === 0) {
		return (
			<MainContainer>
				<MainTitle>Checkout</MainTitle>
				<EmptyCart />
			</MainContainer>
		);
	}

	return (
		<MainContainer>
			<MainTitle>Checkout</MainTitle>
			{cart.map(gameInCart => {
				const allGamesSameTitle = searchGameInOtherPlattforms(gameInCart, cart);
				return (
					<GameInCart
						key={gameInCart.id}
						gameInCart={gameInCart}
						allGamesSameTitle={allGamesSameTitle}
						addGameToCart={addGameToCart}
						removeGameFromCart={removeGameFromCart}
					/>
				);
			})}
			<Container>
				<p>
					With this purchase you earn a ${giftCardAmount} gift card for your
					next purchases.
				</p>
			</Container>

			<Container>
				<StyledTextFlex>
					<span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
				</StyledTextFlex>
				<StyledTextFlex>
					<span>IVA</span>
					<span>21%</span>
				</StyledTextFlex>
				<StyledTextFlex>
					<span>Total</span>
					<span>${total}</span>
				</StyledTextFlex>
			</Container>
		</MainContainer>
	);
};

const searchGameInOtherPlattforms = (gameInCart, cart) => {
	const allGamesSameTitle = GAMES.filter(
		game => game.title === gameInCart.title && game.id !== gameInCart.id
	);

	const removeDuplicatesInCart = allGamesSameTitle.filter(
		game => !cart.includes(game)
	);

	return removeDuplicatesInCart;
};

export default Checkout;
