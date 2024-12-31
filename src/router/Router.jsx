import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../layout/Layout';
import Checkout from '../pages/checkout/Checkout';
import GameStore from '../pages/game-store/GameStore';
import Home from '../pages/home/Home';

const Router = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/game-store' element={<GameStore />} />
				<Route path='/checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default Router;
