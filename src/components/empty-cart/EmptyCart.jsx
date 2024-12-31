import { Link } from 'react-router-dom';
import { BUTTONS } from '../../styles/buttons';
import Button from '../button/Button';

const EmptyCart = () => {
	return (
		<div>
			<h2>Your cart is empty</h2>
			<img src='/assets/images/empty-cart.jpg' alt='' />
			<br />
			<Link to='/game-store'>
				<Button width={BUTTONS.M}>Go to game store</Button>
			</Link>
		</div>
	);
};

export default EmptyCart;
