import { useState } from "react";
import ItemLine from "./ItemLine";

const ListItems = () => {
    const [items] = useState([
        {
            category: "Reaction",
            score: 80,
        },
        {
            category: "Memory",
            score: 92,
        },
        {
            category: "Verbal",
            score: 61,
        },
        {
            category: "Visual",
            score: 72,
        }
    ]);
    
    return (
        <ul className="summary__list">
            {items.map( item => (
                <ItemLine item={item} key={item.category}/>
            ))}
        </ul>
    )
}

export default ListItems
