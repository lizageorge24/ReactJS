import React from "react";

export default function Reduce () {
    const items = [
        { id: 1, category: "fruit", name: "Apple" },
        { id: 2, category: "fruit", name: "Mango" },
        { id: 3, category: "veg", name: "Carrot" }
      ];

    const grouped = items.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);

        return acc;
    }, {});

    console.log(grouped);
}