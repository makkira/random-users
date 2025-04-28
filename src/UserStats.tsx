import { useLazyLoadQuery } from "react-relay"
import { UsersQuery } from "./queries/UsersQuery"
import { useState } from "react";

export default function UserStats() {
    const data = useLazyLoadQuery(UsersQuery, { results: 10, nat: 'us' });
    const [numUsers, setNumUsers] = useState(200);
    const [nat, setNat] = useState('us');

    return (
        <div>
            <h1>User Statistics</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}