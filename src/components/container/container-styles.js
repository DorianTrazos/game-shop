import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledContainer = styled.div`
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 1rem;
	background-color: ${COLORS.dark};
`;

const StyledTextFlex = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
	font-weight: 600;

	&:last-child {
		font-size: 1.25rem;
	}
`;

export { StyledContainer, StyledTextFlex };
