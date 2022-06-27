import React, {useState} from "react";

import { useSelector, useDispatch } from "react-redux";

import Card from "./Card";
import Categories from "./Categories";
import Founder from "./Founder";



import { searchAxiosBooks } from "../redux/thunk-functions";

const Main = () => {
    const [search, setSearch] = useState("")
    const [found,setFound] = useState("")
    const [startIndex,setStartIndex]= useState(0);
    const [category, setCategory] = useState("all");
    const onChangeHandler = (e) => {
        setSearch(e.currentTarget.value)
    }

    const maxResults = 30;

    const dispatch = useDispatch();

    const books = useSelector((state) => { return state.booksReducer });
    console.log()

    // const getBooks = ()

    // ?maxResults=${maxResults}&q=${search}+subject:${volumeCategorie}

    const onChangeCategories = (event) => {
        setCategory(event.target.value)
        dispatch(searchAxiosBooks({
            category,
            search,
            maxResults,
            startIndex,
        }));
    }

    const onClickSearchBook = (event) => {
        dispatch(searchAxiosBooks({
            category,
            search,
            maxResults,
            startIndex,
        }));
        // if (event.key === "Enter") {

    }
    return (
        <>
            <div className="header">
                <div>
                    <h1>Search for books</h1>
                </div>
                    <div className="search">
                        <input
                            text="text"
                            value={search}
                            onChange={onChangeHandler}
                        />
                        <button onClick={onClickSearchBook}>Find</button>
                    </div>
                <Categories category={category} onChangeCategories={onChangeCategories} />

                <div>
                    <Founder items={books.booksTotal}/>
                </div>
            </div>
                <div className="container">
                    {
                        <Card book={books.booksFiltered}/>
                    }
                </div>

        </>)
}

export default Main