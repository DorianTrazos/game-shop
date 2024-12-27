import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledMainContainer = styled.main`
	text-align: center;
	padding: 1rem 1.5rem;
	border-radius: 1rem;
	background-color: ${COLORS.transparentDark};

	@media screen and (width > 768px) {
		text-align: left;
	}
`;

export { StyledMainContainer };
