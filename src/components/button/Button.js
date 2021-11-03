import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
	return (
		<button
			className={`button ${props.variant}`} onClick={props.onClick}
			aria-label={props['aria-label']}>
			{ props.children }
		</button>
	);
}

export default Button;

Button.defaultProps = {
	variant: 'primary',
};

Button.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary']),
	onClick: PropTypes.func.isRequired,
	'aria-label': PropTypes.string,
};