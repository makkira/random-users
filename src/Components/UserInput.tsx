import { useLazyLoadQuery } from "react-relay"
import { UsersQuery } from "../queries/UsersQuery"
import { useState } from "react";
import UserStats from "./UserStats";

export default function UserInput() {
    const [numUsers, setNumUsers] = useState(200);
    const [nat, setNat] = useState('us');

    const natOptions = [
        { value: 'us', label: 'United States' },
        { value: 'gb', label: 'United Kingdom' },
        { value: 'au', label: 'Australia' },
        { value: 'ca', label: 'Canada' },
        { value: 'fr', label: 'France' }
    ]


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <h1>User Statistics</h1>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <p style={{ textAlign: 'right', width: '250px', margin: '0px' }}>Number of Users</p>
                        <input style={{ width: '150px', marginTop: '5px' }} type="number" value={numUsers} onChange={(e) => setNumUsers(Number(e.target.value))} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <p style={{ textAlign: 'right', width: '250px' }}>Nationality of Users</p>
                        <select style={{ width: '150px', marginTop: '5px' }} value={nat} onChange={(e) => setNat(e.target.value)}>
                            {natOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <hr style={{ width: '800px', border: '1px solid white' }} />
            </div>
            <UserStats numUsers={numUsers} nat={nat} />
        </>
    )
}