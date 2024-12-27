import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledInputSearchContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 1rem;
`;

const StyledInputSearchIcon = styled.img`
	position: absolute;
	top: 25px;
	width: 2.25rem;
	left: 2rem;
`;

const StyledInputSearch = styled.input`
	border: none;
	width: 100%;
	height: 50px;
	padding-left: 3.5rem;
	margin-bottom: 2rem;
	border-radius: 1rem;
	background-color: ${COLORS.dark};
	color: white;
`;

export { StyledInputSearch, StyledInputSearchContainer, StyledInputSearchIcon };
