import { combineReducers } from "redux";

import { booksReducer } from "./books/booksReducer";

export const rootReducer = combineReducers({
    booksReducer
})

