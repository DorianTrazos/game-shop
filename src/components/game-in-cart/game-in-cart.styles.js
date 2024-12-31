import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const GameInCartContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1rem;
	padding: 1rem;
	background-color: ${COLORS.dark};
	border-radius: 1rem;
`;

const GameInCartInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
`;

const GameInCartImage = styled.img`
	width: 100%;
	border-radius: 1rem;
`;

const GameInCartTitle = styled.h2`
	font-size: 1rem;
`;

export {
	GameInCartContainer,
	GameInCartImage,
	GameInCartInfo,
	GameInCartTitle
};
