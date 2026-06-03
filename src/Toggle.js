import React, { useState } from "react";

const initialItems = [
    { id: 1, label: "Apple", selected: false },
    { id: 2, label: "Banana", selected: false },
    { id: 3, label: "Mango", selected: false }
  ];

export default function Toggle () {
    const [items, setItems] = useState(initialItems);
    const toggleItem = (id) => {
    setItems(prev => 
        prev.map(item => 
            item.id === id
            ? {
                ...item,
                selected: !item.selected
            }
            : item
        )
    )
};

    return (
        <ul>
            {items.map(item => (
                <li key={item.id} onClick={() => toggleItem(item.id)}
                style={{cursor:"pointer", fontWeight: item.selected ? "bold" : "normal"}}
                >
                {item.label}{item.selected ? " X" : ""}   
                </li>
            )
                
            )}
        </ul>
    )

}