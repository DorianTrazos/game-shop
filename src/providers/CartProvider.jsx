import { useState } from 'react';
import { CartContext } from '../contexts/cart-context';

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addGameToCart = game => {
		setCart([...cart, game]);
	};

	const removeGameFromCart = game => {
		const updatedCart = cart.filter(gameInCart => gameInCart.id !== game.id);
		setCart(updatedCart);
	};

	console.log(cart);
	return (
		<CartContext.Provider value={{ cart, addGameToCart, removeGameFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
