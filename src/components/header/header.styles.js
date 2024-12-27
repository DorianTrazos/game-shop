import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: ${({ $open }) => ($open ? '19.375rem' : '130px')};
	margin-bottom: 2rem;
	padding: 2rem;
	border-radius: 1rem;
	background-color: ${COLORS.transparentDark};
	overflow: hidden;
	transition: height 0.2s;

	@media screen and (width >768px) {
		height: 12.5rem;
		flex-direction: row;
		justify-content: space-between;
	}
`;

const StyledIconMenu = styled.img`
	@media screen and (width >768px) {
		display: none;
	}
`;

const StyledHeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media screen and (width >768px) {
		width: fit-content;
	}
`;

const StyledBadge = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: ${({ $open }) => ($open ? '15.3125rem' : '2rem')};
	right: ${({ $open }) => ($open ? '5rem' : '1rem')};
	width: 1.5rem;
	height: 1.5rem;
	background-color: ${COLORS.primary};
	color: white;
	border-radius: 50%;

	@media screen and (width > 768px) {
		top: 4.25rem;
		left: calc(100% - 4rem);
	}
`;

export { StyledBadge, StyledHeader, StyledHeaderTop, StyledIconMenu };
