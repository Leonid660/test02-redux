import axios from "axios";

import {
    BOOKS_IS_LOADING,
    SEARCH,
    BOOKS_TOTAL,
    SET_BOOKS_IN_FILTER,
    BOOKS_FILTER,
} from "./actions";

export function searchBooksSuccess(books){
    return {
        type: SEARCH,
        payload: {
            books
        }
    }
}

export function booksIsLoading(isLoading){
    return {
        type: BOOKS_IS_LOADING,
        payload: {
            isLoading
        }
    }
}

export function booksTotal(totalBooks) {
    return {
        type: BOOKS_TOTAL,
        payload: {
            totalBooks
        }
    }
}

export function setBooksInFilter(books) {
    return {
        type: SET_BOOKS_IN_FILTER,
        payload: {
            books,
        }
    }
}

export function booksFilter({category, books}) {
    return {
        type: BOOKS_FILTER,
        payload: {
            category,
            books
        }
    }
}