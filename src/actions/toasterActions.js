import Unique from '../utils/Unique'

export function addToast(params) {
    const id = new Unique().gen()
    const time = new Date().getTime()
    const toast = {...params, id, time, toBeRemoved: false}
    return function (dispatch) {
        dispatch({type: "ADD_TOAST", payload: {toast}})
    }
}
export function removeToast (toastId) {
    return function(dispatch) {
        dispatch({type: "REMOVE_TOAST", payload: {toastId}})
    }
}


