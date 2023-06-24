const initialState = JSON.parse(localStorage.getItem('cart')) || []

export const actions = {
    ADD_TO_CART: "ADD_TO_CART",
    DECREASE_NUMBER: "DECREASE_NUMBER",
    INCREASE_NUMBER: "INCREASE_NUMBER",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_ALL: "CLEAR_ALL"
};

export default function cartReducer(state = initialState, action) {
    let newCart = [...state];
    switch (action.type) {
        case actions.ADD_TO_CART:
            if (!state.some(item => item.id === action.id)) {
                newCart.push({ id: action.id, count: 1 })
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
            return newCart
        case actions.INCREASE_NUMBER:
            newCart = state.map((item) => {
                if (item.id === action.id) {
                    return {
                        id: item.id,
                        count: item.count + 1
                    }
                } else {
                    return item;
                }
            });
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        case actions.DECREASE_NUMBER:
            if (state.some((item) => item.id === action.id)) {
                let item = state.find((item) => item.id === action.id)

                if (item.count > 1) {
                    newCart = newCart.map((item) => {
                        if (item.id === action.id) {
                            return {
                                id: item.id,
                                count: item.count - 1
                            }
                        }
                        return item
                    })
                }

                localStorage.setItem('cart', JSON.stringify(newCart))
            }

            return newCart

        case actions.REMOVE_FROM_CART:
            newCart = newCart.filter((item) =>
                item.id !== action.id
            )
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart

        case actions.CLEAR_ALL:
            newCart = []

            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart

        default:
            return newCart
    }
}
