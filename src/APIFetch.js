import  React, { useState, useEffect } from "react";

export default function APIFetch () {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) {
                    throw new Error("Network error");
                }

                const data = await res.json();
                setUsers(data);
            }
            catch(err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchUsers(); 
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Failed to load users</p>

    return (
        <ul>{users.map(user => 
            <li key={user.id}>
                {user.name}
            </li>
        )
        }
    </ul>
    );
}