import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledGameContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.125rem;
	padding: 1rem;
	margin-bottom: 2rem;
	width: 16.875rem;
	text-align: left;
	border-radius: 1rem;
	background-color: ${COLORS.dark};
`;

const StyledGameTitle = styled.h2`
	margin-block: 0;
	/* margin-right: auto; */
	font-size: 1.125rem;
	font-weight: 600;
`;

const StyledGameImage = styled.img`
	border-radius: 1rem;
`;

const StyledGameInCart = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

export {
	StyledGameContainer,
	StyledGameImage,
	StyledGameInCart,
	StyledGameTitle
};
