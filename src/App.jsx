import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/CartProvider';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<CartProvider>
				<Router />
			</CartProvider>
		</BrowserRouter>
	);
};

export default App;
