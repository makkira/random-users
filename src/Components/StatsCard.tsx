import React from 'react';
import styles from '../styles/StatsCard.module.css';

type Props = {
    title: string;
    children: React.ReactNode;
};

export default function StatsCard({ title, children }: Props) {
    return (
        <div className={styles.card}>
            <h2 className={styles.heading}>{title}</h2>
            <div className={styles.body}>{children}</div>
        </div>
    );
}
