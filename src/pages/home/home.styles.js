import styled from 'styled-components';

const StyledText = styled.p`
	font-size: 1rem;
	line-height: 2rem;
`;

const StyledList = styled.ul`
	list-style: circle;
	text-align: left;
	line-height: 2rem;
	padding-left: 1rem;
	@media screen and (width > 768px) {
		padding-left: 2rem;
	}
`;

export { StyledList, StyledText };
