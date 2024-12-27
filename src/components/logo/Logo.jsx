const Logo = () => {
	return (
		<picture>
			<source
				media='(min-width: 768px)'
				srcSet='/assets/images/logos/logo-desktop.png'
			/>
			<source
				media='(min-width: 360px)'
				srcSet='/assets/images/logos/logo-mobile.png'
			/>
			<img src='public/assets/images/logos/logo-mobile.png' alt='Logo' />
		</picture>
	);
};

export default Logo;
