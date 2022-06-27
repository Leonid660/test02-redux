import axios from "axios";

import {
    API_KEY,
    BASE_URL_API
} from "../constants";

import {
    booksIsLoading,
    booksTotal,
    searchBooksSuccess, setBooksInFilter,

} from "./action-creators";

export function searchAxiosBooks({
    search,
    selectedCategory,
    typeSort,
    startIndex,
    maxResults
}) {
    return async (dispatch) => {
        try {
            dispatch(booksIsLoading(true));
            const response = await axios.get(`${BASE_URL_API}/books/v1/volumes?q=${search}+subject=${selectedCategory}&key=${API_KEY}&maxResults=${maxResults}&startIndex=${startIndex}`);
            const { items, totalItems } = response.data;
            dispatch(booksTotal(totalItems));
            dispatch(searchBooksSuccess(items));
            dispatch(setBooksInFilter(items));
            dispatch(booksIsLoading(false));
        }
        catch (error){
            dispatch(booksIsLoading(false));
        }

    }
}
