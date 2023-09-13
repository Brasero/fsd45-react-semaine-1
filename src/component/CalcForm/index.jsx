
const CalcForm = ({state, dispatch}) => {

    const regex = /^\d+(?:[.,]\d+)?$/
    const handleChange = (e) => {
        const {name, value} = e.target
        const test = regex.test(value)
        let error = '';
        if(!test) {
            error = 'Le champ n\'est pas valide'
        }
        dispatch({type: 'changeValue', payload: {name, value}})
        dispatch({type: 'changeValue', payload: {name: 'error', value: error}})
    }

    return (
        <form>
            <div>
                <input type={'text'} onChange={handleChange} name={'currentNumber'} value={state.currentNumber} />
            </div>
        </form>
    )
}

export default CalcForm;