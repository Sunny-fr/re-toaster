const defaultState = {
    toasts: []
}

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case "ADD_TOAST": {
            return {
                ...state,
                toasts: state.toasts.concat(action.payload.toast)
            }
        }
        case "REMOVE_TOAST": {
            return {
                ...state,
                toasts: state.toasts.filter(toast => toast.id !== action.payload.toastId)
            }
        }
        case "TO_BE_REMOVED_TOAST": {

            const toast = {
                ...state.toasts.find(toast => toast.id === action.payload.toastId),
                toBeRemoved: true
            }

            return {
                ...state,
                toasts: state.toasts.filter(toast => toast.id !== action.payload.toastId).concat(toast)
            }
        }
        default:
            return state

    }
}
