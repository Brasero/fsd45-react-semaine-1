import {useState} from "react";

const ProductForm = ({state, dispatch}) => {
    const priceRegex = /^[\d]{1,}[\d.,]*$/

    const normalize = (num) => parseFloat(num.replace(',','.'))

    const initialErrors = {
        name: '',
        description: '',
        prix: ''
    }

    const [errors, setErrors] = useState(initialErrors)

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === 'prix' && value !== '') {
            const test = priceRegex.test(value)
            if(!test) {
                setErrors({
                    ...errors,
                    prix: 'Le champ prix n\'accepte pas autre chose des caractere numérique.'
                })
                return
            } else {
                setErrors(initialErrors)
                dispatch({type: 'changeValue', payload: {name, value: value}})
                return
            }
        }

        setErrors(initialErrors)
        dispatch({type: 'changeValue', payload: {name, value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'addProduct', payload: state})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type={'text'} onChange={handleChange} value={state.name} name={'name'} />
            </label>
            <label>
                Déscription :
                <input type={'text'} onChange={handleChange} value={state.description} name={'description'} />
            </label>
            <label>
                Prix :
                <input type={'text'} onChange={handleChange} value={state.prix} name={'prix'} />
                {
                    errors.prix.length > 0 && <span>{errors.prix}</span>
                }
            </label>
            <input type={'submit'} value={'Enregistrer'}/>
        </form>
    )
}

export default ProductForm;