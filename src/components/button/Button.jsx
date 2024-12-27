import { StyledButton } from './button.styles';

const Button = ({ children, width, action, primary = true }) => {
	return (
		<StyledButton $primary={primary} $width={width} onClick={action}>
			{children}
		</StyledButton>
	);
};

export default Button;
