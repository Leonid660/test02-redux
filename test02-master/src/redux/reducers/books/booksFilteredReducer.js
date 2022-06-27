import {
    SET_BOOKS_IN_FILTER,
    BOOKS_FILTER
} from "../../actions";


export default function booksFilteredReducer(state = [], action) {
    // switch (action.type) {
    //     case SET_BOOKS_IN_FILTER: {
    //         return action.payload.books
    //     }
    //     case BOOKS_FILTER: {
    //         return action.payload.books.filter((book) => {
    //             if(book?.volumeInfo?.categories) {
    //                 const category = (action.payload.category).toLowerCase();
    //                 const result = book.volumeInfo.categories.find((bookCategory) => {
    //                     return (bookCategory.toLowerCase().indexOf(category) !== -1);
    //                 })
    //                 return !!result;
    //             } else {
    //                 return false;
    //             }
    //         })
    //     }
    //     default: {
    //         return state;
    //     }
    // }
    // Эта штука фильтрует локально, но я не уверен, что она нужна
}