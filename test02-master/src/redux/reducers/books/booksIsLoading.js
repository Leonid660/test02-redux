import { BOOKS_IS_LOADING } from "../../actions";

export default function booksIsLoadingReducer(state = false, action) {
    switch (action.type){
        case BOOKS_IS_LOADING: {
            return action.payload.isLoading;
        }
        default: {
            return state;
        }
    }
}