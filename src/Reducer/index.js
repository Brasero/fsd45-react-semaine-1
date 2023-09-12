let productId = 1;

const initialProduct = {
    name: '',
    description: '',
    prix: '',
    qte: 1
}
export const initialState = {
    products: [],
    product: initialProduct
}

const productReducer = (state, action) => {
    switch(action.type) {
        case 'changeValue':
            return {
                ...state,
                product: {
                    ...state.product,
                    [action.payload.name]: action.payload.value
                }
            }

        case 'addProduct':
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        id: productId++,
                        ...action.payload
                    }
                ],
                product: initialProduct
            }

        case 'suppressProduct':
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload)
            }

        case 'increment':
            return {
                ...state,
                products: state.products.map((product) => {
                    if(product.id === action.payload) {
                        return {
                            ...product,
                            qte: product.qte + 1
                        }
                    }
                    return product
                })
            }

        case 'decrement':
            const index = state.products.findIndex((product) => product.id === action.payload)
            if(state.products[index].qte === 1) {
                return {
                    ...state,
                    products: state.products.filter((product) => product.id !== action.payload)
                }
            } else {
                return {
                    ...state,
                    products: state.products.map((product) => {
                        if(product.id === action.payload) {
                            return {
                                ...product,
                                qte: product.qte - 1
                            }
                        }
                        return product
                    })
                }
            }

        default:
            return state;
    }
}

export default productReducer