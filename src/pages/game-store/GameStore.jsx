import { useState } from 'react';
import GamesList from '../../components/games-list/GamesList';
import InputSearch from '../../components/input-search/InputSearch';
import MainContainer from '../../components/main-container/MainContainer';
import MainTitle from '../../components/main-title/MainTitle';
import Plattforms from '../../components/plattforms/Plattforms';
import { GAMES } from '../../constants/games-info';

const GameStore = () => {
	const [search, setSearch] = useState('');
	const [filters, setFilters] = useState([]);

	let filteredGames = filterGamesByPlatform(GAMES, filters);
	filteredGames = searchGamesByName(filteredGames, search);
	return (
		<MainContainer>
			<MainTitle>Game Store</MainTitle>
			<InputSearch
				type='text'
				placeholder='Search your game...'
				action={event => setSearch(event.target.value)}
			/>
			<Plattforms
				changeFiltersSelected={changeFiltersSelected}
				filters={filters}
				setFilters={setFilters}
			/>
			<GamesList games={filteredGames} />
		</MainContainer>
	);
};

const searchGamesByName = (games, search) => {
	if (!search) return games;

	return games.filter(game =>
		game.title.toLowerCase().includes(search.toLowerCase())
	);
};

const filterGamesByPlatform = (games, filters) => {
	if (filters.length === 0) return games;

	const filteredGames = games.filter(game =>
		filters.includes(game.plattform.toLowerCase())
	);

	return filteredGames;
};

const changeFiltersSelected = (currentFilter, filters, setFilters) => {
	const isChecked = currentFilter.checked;
	const filterName = currentFilter.id;
	if (isChecked) {
		if (!filters.includes(filterName)) {
			setFilters([...filters, filterName]);
		}
	} else {
		const updateFilters = filters.filter(filter => filter !== filterName);
		setFilters(updateFilters);
	}
};

export default GameStore;
