import { useState } from "react";
const products = [ 
  { id: 1, name: "Outback", type: "SUV" },
  { id: 2, name: "Impreza", type: "Sedan" },
  { id: 3, name: "Forester", type: "SUV" },
  { id: 4, name: "Civic", type: "Sedan" }
];

export default function ProductList () {
    const [search, setSearch] = useState("");
    
    return (
        <div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Cars...."}
            />
            
        </div>
        );
}



