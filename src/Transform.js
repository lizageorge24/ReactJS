import React from "react";
export default function Transform () {
    const users = [
        { id: 1, name: "Liza" },
        { id: 2, name: "John" }
      ];
    
    const options = users.map(user => ({
        value: user.id,
        name: user.name
    }));
    
    console.log(options);

    return (
        <div>
            <h1>Console</h1>
        </div>
    )
}
