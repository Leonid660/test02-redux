import {
    SEARCH,
} from "../../actions";


export default function booksSearchReducer(state = [], action) {
    switch (action.type) {
        case SEARCH: {
            return action.payload.books;
        }
        default: {
            return state;
        }
    }
}