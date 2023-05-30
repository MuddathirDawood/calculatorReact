import React, { createContext, useReducer, useContext} from 'react';
import PropTypes from 'prop-types';
import { evaluate } from 'mathjs';

export const CalculatorContext = createContext(null);
export const CalculatorDispatch = createContext(null);

const initCalculator = {
    history: [],
    evalString: "",
    result: 0
}

export function CalculatorProvider({children}){
    const [event, dispatch] = useReducer(CalculatorReducer, initCalculator);
    return(
        <CalculatorContext.Provider value={event}>
            <CalculatorDispatch.Provider value={dispatch}>
                {children}
            </CalculatorDispatch.Provider>  
        </CalculatorContext.Provider>
    )

}

function CalculatorReducer(event, action){
    switch (action.type) {
        case 'input':
            return {...event, evalString: `${event.evalString}${action.input}`};
        case 'calculate':
            let answer = evaluate(event.evalString)
            return {...event, result: answer, evalString: ""}    
        default:
            return {event}
    }
}

CalculatorProvider.propTypes = {
    children: PropTypes.array
}

export function useCalculatorContext() {
    return useContext(CalculatorContext);
}

export function useCalculatorDispatch() {
    return useContext(CalculatorDispatch);
}