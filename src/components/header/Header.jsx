import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart-context';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import {
	StyledBadge,
	StyledHeader,
	StyledHeaderTop,
	StyledIconMenu
} from './header.styles';

const Header = () => {
	const [open, setOpen] = useState(false);
	const { cart } = useContext(CartContext);
	const menuIconImage = open
		? '/assets/images/cross.svg'
		: '/assets/images/hamburguer.svg';

	return (
		<StyledHeader $open={open}>
			<StyledHeaderTop>
				<Logo />
				<StyledIconMenu
					src={menuIconImage}
					alt='hamburguer icon'
					onClick={() => setOpen(!open)}
				/>
			</StyledHeaderTop>
			<Menu open={open} setOpen={setOpen} />
			<StyledBadge $open={open}>{cart.length}</StyledBadge>
		</StyledHeader>
	);
};

export default Header;
