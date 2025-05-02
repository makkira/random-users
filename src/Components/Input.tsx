// components/Input.tsx
import React from 'react';
import styles from '../styles/Input.module.css';

type InputProps = {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
};

export default function Input({ label, htmlFor, children }: InputProps) {
    return (
        <div className={styles.row}>
            <label htmlFor={htmlFor} className={styles.label}>
                {label}
            </label>
            {children}
        </div>
    );
}