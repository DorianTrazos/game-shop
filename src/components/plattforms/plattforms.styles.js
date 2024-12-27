import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledPlattforms = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: ${({ $open }) => ($open ? '16.1875rem' : '5.375rem')};
	border-radius: 1rem;
	margin-bottom: 2rem;
	padding: 2rem;
	overflow: hidden;
	background-color: ${COLORS.dark};
	transition: height 0.2s;
`;

const StyledPlattformsTitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledPlattformsTitle = styled.h2`
	margin-block: 0;
`;

const StyledPlattform = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
`;

const StyledPlattformInput = styled.input`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	accent-color: ${COLORS.primary};
	width: 1.5rem;
	height: 1.5rem;
	border: 1px solid ${COLORS.secondary};
	border-radius: 0.25rem;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&:checked {
		background-color: ${COLORS.primary};
		border: none;
	}

	&:checked::after {
		content: '※';
		position: absolute;
		color: white;
	}
`;

export {
	StyledPlattform,
	StyledPlattformInput,
	StyledPlattforms,
	StyledPlattformsTitle,
	StyledPlattformsTitleContainer
};
