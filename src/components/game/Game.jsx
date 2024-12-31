import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';
import { BUTTONS } from '../../styles/buttons';
import Button from '../button/Button';
import {
	StyledGameContainer,
	StyledGameImage,
	StyledGameInCart,
	StyledGameTitle
} from './game.styles';

const Game = ({ game }) => {
	const { cart, addGameToCart, removeGameFromCart } = useContext(CartContext);
	const { id, title, plattform, image, price } = game;
	const isInCart = cart.some(gameInCart => gameInCart.id === id);
	return (
		<StyledGameContainer>
			<StyledGameTitle>
				{title} - {plattform}
			</StyledGameTitle>
			<StyledGameImage src={image} alt={`${title} cover`} />
			{isInCart && (
				<StyledGameInCart>
					<Link to='/checkout'>
						<Button width={BUTTONS.M} primary={false}>
							In Cart
						</Button>
					</Link>
					<img
						src='/assets/images/trash.svg'
						alt='trash icon'
						onClick={() => removeGameFromCart(game)}
					/>
				</StyledGameInCart>
			)}
			{!isInCart && (
				<Button width={BUTTONS.XL} action={() => addGameToCart(game)}>
					Buy - ${price.toFixed(2)}
				</Button>
			)}
		</StyledGameContainer>
	);
};

export default Game;
