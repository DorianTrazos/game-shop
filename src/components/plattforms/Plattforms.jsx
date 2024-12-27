import { useState } from 'react';
import {
	StyledPlattform,
	StyledPlattformInput,
	StyledPlattforms,
	StyledPlattformsTitle,
	StyledPlattformsTitleContainer
} from './plattforms.styles';

const Plattforms = ({ changeFiltersSelected, filters, setFilters }) => {
	const [open, setOpen] = useState(false);
	const chevronImage = open
		? '/assets/images/chevron-up.svg'
		: '/assets/images/chevron-down.svg';
	return (
		<StyledPlattforms $open={open}>
			<StyledPlattformsTitleContainer onClick={() => setOpen(!open)}>
				<StyledPlattformsTitle>Plattforms</StyledPlattformsTitle>
				<img src={chevronImage} alt='chevron icon' />
			</StyledPlattformsTitleContainer>
			<StyledPlattform>
				<StyledPlattformInput
					type='checkbox'
					id='pc'
					onChange={event =>
						changeFiltersSelected(event.target, filters, setFilters)
					}
				/>
				<label htmlFor='pc'>PC</label>
			</StyledPlattform>
			<StyledPlattform>
				<StyledPlattformInput
					type='checkbox'
					id='ps5'
					onChange={event =>
						changeFiltersSelected(event.target, filters, setFilters)
					}
				/>
				<label htmlFor='ps5'>Play Station 5</label>
			</StyledPlattform>
			<StyledPlattform>
				<StyledPlattformInput
					type='checkbox'
					id='ps4'
					onChange={event =>
						changeFiltersSelected(event.target, filters, setFilters)
					}
				/>
				<label htmlFor='ps4'>Play Station 4</label>
			</StyledPlattform>
		</StyledPlattforms>
	);
};

export default Plattforms;
