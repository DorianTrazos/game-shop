import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { StyledLayout } from './layout.styles';

const Layout = () => {
	return (
		<StyledLayout>
			<Header />
			<Outlet />
		</StyledLayout>
	);
};

export default Layout;
