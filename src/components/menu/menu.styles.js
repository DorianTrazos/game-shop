import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledMenu = styled.ul`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	text-align: center;
	padding: 2rem;

	@media screen and (width >768px) {
		flex-direction: row;
	}
`;

const StyledLink = styled(NavLink)`
	color: ${COLORS.secondary};
	font-size: 1.5rem;

	&.active {
		color: ${COLORS.primary};
	}
`;

export { StyledLink, StyledMenu };
