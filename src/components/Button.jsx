import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className={'bg-blue-500 px-10 py-5'}>{props.buttonLabel}</button>
    )
}

Button.propTypes = {
    buttonLabel: PropTypes.string
}

export default Button