import React from "react";

const Card = ({book}) => {
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks.smallThumbnail
                    return (
                        <div key={item.id} className="card">
                            <img
                                src={thumbnail} alt=""/>
                            <div className="bottom">
                                <h1>{item.volumeInfo.categories}</h1>
                                <h2>{item.volumeInfo.authors}</h2>
                                <h3>{item.volumeInfo.title}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card