import PropTypes from 'prop-types';
import { useCalculatorDispatch } from '../context/CalculatorContext';

const Button = (props) => {
    const calculatorDispatch = useCalculatorDispatch();

    const handleClick = (input) => {
        if (input == '=') {
            calculatorDispatch({type: "calculate"});
        } else {
            if (input == 'X') {
                calculatorDispatch({type: "input", input: "*"});  
            } else {
                calculatorDispatch({type: "input", input: input});
            }
        }
    }


    return (
        <button onClick={() => handleClick([props.buttonLabel])} className={`bg-blue-500 text-lg font-semibold px-10 py-5 ${props.span} ${props.color}`}>
            {props.buttonLabel}
        </button>
    )
}

Button.propTypes = {
    buttonLabel: PropTypes.string,
    span: PropTypes.string,
    color: PropTypes.string
}

export default Button