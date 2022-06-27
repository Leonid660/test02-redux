import {
    BOOKS_TOTAL
} from "../../actions";


export default function booksTotalReducer(state = 0, action) {
    switch (action.type) {
        case BOOKS_TOTAL: {
            return action.payload.totalBooks;
        }
        default: {
            return state;
        }
    }
}