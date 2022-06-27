import { combineReducers } from "redux";

import booksSearchReducer from "./booksSearchReducer"
import booksIsLoadingReducer from "./booksIsLoading";
import booksFiltredReducer from "./booksFilteredReducer";
import booksTotalReducer from "./booksTotalReducer";

export const booksReducer = combineReducers({
    books: booksSearchReducer,
    booksIsLoading: booksIsLoadingReducer,
    booksTotal: booksTotalReducer,
    booksFiltered: booksFiltredReducer,
})

