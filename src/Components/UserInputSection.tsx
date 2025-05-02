import React, { useState, useTransition } from 'react';
import Input from './Input';
import UserStats from './UserStats';
import styles from '../styles//UserInputSection.module.css';

type UserInputSectionProps = {
    results: number;
    setResults: (results: number) => void;
    nat: string;
    setNat: (nat: string) => void;
};

const natOptions = [
    { value: 'us', label: 'United States' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'ca', label: 'Canada' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'es', label: 'Spain' },
    { value: 'it', label: 'Italy' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea' },
    { value: 'cn', label: 'China' },
    { value: 'br', label: 'Brazil' },
    { value: 'in', label: 'India' },
    { value: 'za', label: 'South Africa' },
    { value: 'ru', label: 'Russia' },
];

export default function UserInputSection({ results, setResults, nat, setNat }: UserInputSectionProps) {
    const [isPending, startTransition] = useTransition();
    const [res, setRes] = useState<number>(results);
    const [nati, setNati] = useState<string>(nat);

    const handleSubmit = () => {
        startTransition(() => {
            setResults(res);
            setNat(nati);
        });
    };

    return (
        <div className={styles.container}>
            <h1>User Statistics</h1>
            <p className={styles.subtitle}>
                Note: API limits to maximum 5000 users.Any input greater than 5000, will default to 5000.</p>
            <div className={styles.form}>
                <Input label="Total Users" htmlFor="results">
                    <input
                        id="results"
                        type="text"
                        inputMode="numeric"
                        value={String(res)}
                        onChange={e => {
                            const digits = e.target.value.replace(/\D/g, '');
                            let num = parseInt(digits, 10) || 0;
                            if (num > 5000) num = 5000;
                            setRes(num);
                        }}
                        className={styles.input}
                    />
                </Input>

                <Input label="Nationality" htmlFor="nat">
                    <select
                        id="nat"
                        value={nati}
                        onChange={(e) => setNati(e.target.value)}
                        className={styles.select}
                    >
                        {natOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </Input>

                <button
                    onClick={handleSubmit}
                    className={styles.button}
                    disabled={isPending}
                >
                    {isPending ? 'Loading...' : 'Submit'}
                </button>
            </div>

            <hr className={styles.divider} />

            <UserStats results={results} nat={nat} />
        </div>
    );
}