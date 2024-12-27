import {
	StyledInputSearch,
	StyledInputSearchContainer,
	StyledInputSearchIcon
} from './input-search.styles';

const InputSearch = ({ action }) => {
	return (
		<StyledInputSearchContainer>
			<StyledInputSearchIcon src='/assets/images/search.svg' alt='' />
			<StyledInputSearch
				type='text'
				placeholder='Search your game...'
				onInput={action}
			/>
		</StyledInputSearchContainer>
	);
};

export default InputSearch;
