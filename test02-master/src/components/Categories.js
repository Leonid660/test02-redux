import React from "react";

const Categories = ({ category, onChangeCategories }) => {



    return <div>
        <div>
            Categories :
            <select name="select" value={category} onChange={onChangeCategories}>
                <option value="all" selected>all</option>
                <option value="art">art</option>
                <option value="biography">biography</option>
                <option value="computers">computers</option>
                <option value="history">history</option>
                <option value="medical">medical</option>
                <option value="poetry">poetry</option>
            </select>
        </div>
        <div>
            Sort For By :
            <select name="select">
                <option value="relevance" selected>relevance</option>
                <option value="newest">newest</option>
            </select>
        </div>
    </div>
}

export default Categories