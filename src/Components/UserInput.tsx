import { useState, useTransition } from "react";
import UserStats from "./UserStats";

type UserInputProps = {
    results: number;
    setResults: (results: number) => void;
    nat: string;
    setNat: (nat: string) => void;
}
export default function UserInput({ results, setResults, nat, setNat }: UserInputProps) {
    const [isPending, startTransition] = useTransition();
    const [res, setRes] = useState(results);
    const [nati, setNati] = useState(nat);

    const natOptions = [
        { value: 'us', label: 'United States' },
        { value: 'gb', label: 'United Kingdom' },
        { value: 'au', label: 'Australia' },
        { value: 'ca', label: 'Canada' },
        { value: 'fr', label: 'France' }
    ]

    const handleSubmit = () => {
        startTransition(() => {
            setResults(res);
            setNat(nati);
        });
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <h1>User Statistics</h1>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <p style={{ textAlign: 'right', width: '250px', margin: '0px' }}>Number of Users</p>
                        <input style={{ width: '150px', marginTop: '5px' }} type="number" min={1} value={res} onChange={(e) => setRes(Number(e.target.value))} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <p style={{ textAlign: 'right', width: '250px' }}>Nationality of Users</p>
                        <select style={{ width: '150px', marginTop: '5px' }} disabled value={nati} onChange={(e) => setNati(e.target.value)}>
                            {natOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
                    Submit
                </button>
                <hr style={{ width: '800px', border: '1px solid white' }} />
            </div>
            {isPending && <span style={{ marginLeft: 10 }}>Updating…</span>}
            <UserStats results={results} nat={nat} />
        </>
    )
}