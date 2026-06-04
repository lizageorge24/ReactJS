import React from "react";

export default function SortDupeAsc () {
    const nums = [5, 3, 5, 1, 2, 2, 4];

    const res = [... new Set(nums)].sort((a,b) => a-b);

    return (
        <div>
            <h1>Ordered list: </h1>
            <ul>
                <li>{res}</li>
            </ul>
        </div>
    )
}