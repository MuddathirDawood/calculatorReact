import { useCalculatorContext } from "../context/CalculatorContext"

const Display = () => {
    const calculcatorContext = useCalculatorContext();

    return (
        <div className={"bg-slate-500 text-2xl font-bold text-right p-4 mb-2"}>
            <span>
                {!calculcatorContext.evalString ? calculcatorContext.result : calculcatorContext.evalString}
            </span>
        </div>
    )
}

export default Display