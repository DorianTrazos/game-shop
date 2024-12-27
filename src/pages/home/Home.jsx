import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import MainContainer from '../../components/main-container/MainContainer';
import MainTitle from '../../components/main-title/MainTitle';
import { BUTTONS } from '../../styles/buttons';
import { StyledList, StyledText } from './home.styles';

const Home = () => {
	return (
		<MainContainer>
			<MainTitle>Gamer Shop</MainTitle>
			<picture>
				<source
					media='(min-width: 768px)'
					srcSet='/assets/images/banner-desktop.jpg'
				/>
				<source
					media='(min-width: 360px)'
					srcSet='/assets/images/banner-mobile.jpg'
				/>
				<img src='/assets/images/banner-mobile.jpg' alt='' />
			</picture>
			<StyledText>
				Welcome to GAMER SHOP Discover a world of gaming excitement at your
				fingertips! From the latest blockbusters to timeless classics, we offer
				an extensive collection of games for all platforms.
			</StyledText>
			<h2>🎮 Why Choose Us?</h2>
			<StyledList>
				<li>Wide Selection: Thousands of titles across all genres.</li>
				<li>Great Deals: Competitive prices and exclusive offers.</li>
				<li>Instant Access: Digital downloads available 24/7.</li>
				<li>Trusted Service: Fast and secure shopping experience.</li>
			</StyledList>
			<StyledText>
				Level up your gaming experience today! Explore, shop, and play like
				never before.
			</StyledText>
			<Link to='/game-store'>
				<Button width={BUTTONS.L}>Go To Game Store</Button>
			</Link>
		</MainContainer>
	);
};

export default Home;
