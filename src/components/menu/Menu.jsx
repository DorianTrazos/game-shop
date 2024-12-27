import { StyledLink, StyledMenu } from './menu.styles';

const Menu = ({ open, setOpen }) => {
	return (
		<nav>
			<StyledMenu $open={open}>
				<li>
					<StyledLink to='/' onClick={() => setOpen(false)}>
						Home
					</StyledLink>
				</li>
				<li>
					<StyledLink to='/game-store' onClick={() => setOpen(false)}>
						Game Store
					</StyledLink>
				</li>
				<li>
					<StyledLink to='/checkout' onClick={() => setOpen(false)}>
						Checkout
					</StyledLink>
				</li>
			</StyledMenu>
		</nav>
	);
};

export default Menu;
