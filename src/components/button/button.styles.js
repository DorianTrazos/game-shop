import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledButton = styled.button`
	border: none;
	width: ${({ $width }) => $width};
	line-height: 2.75rem;
	font-weight: 600;
	color: white;
	border-radius: 1rem;
	background-color: ${({ $primary }) =>
		$primary ? COLORS.primary : COLORS.secondary};
`;

export { StyledButton };
