import { useLazyLoadQuery } from "react-relay";
import { UsersQuery } from "../queries/UsersQuery";
import { useMemo } from "react";
import type { UsersQuery as UsersQueryType } from '../queries/__generated__/UsersQuery.graphql';

type UserStatsProps = {
    results: number;
    nat: string;
}
export default function UserStats({ results, nat }: UserStatsProps) {
    const data = useLazyLoadQuery<UsersQueryType>(UsersQuery, { results: results, nat }, { fetchPolicy: 'network-only' });

    const stats = useMemo(() => {
        const arr = data.users ?? [];
        const femalePercentage = Number(((arr.filter(g => g?.gender === 'female').length / results) * 100).toFixed(1));

        const agePct: Record<string, number> = {};
        const buckets: Array<[string, number, number]> = [
            ['0–20', 0, 20],
            ['21–40', 21, 40],
            ['41–60', 41, 60],
            ['61–80', 61, 80],
            ['81–100', 81, 100],
            ['100+', 101, Infinity],
        ];
        for (const [label, min, max] of buckets) {
            const count = arr.filter(u => {
                const age = u?.dob?.age;
                return typeof age === 'number' && age >= min && age <= max;
            }).length;
            agePct[label] = (count / results) * 100;
        }

        const nameLenCounts: Record<number, number> = {};
        for (const u of arr) {
            const last = u?.name?.last;
            const len = last ? last.length : 0;
            nameLenCounts[len] = (nameLenCounts[len] || 0) + 1;
        }

        const stateCounts: Record<string, number> = {};
        for (const u of arr) {
            const s = u?.location?.state;
            if (s) stateCounts[s] = (stateCounts[s] || 0) + 1;
        }
        // sort and take top 10
        const topStates = Object.entries(stateCounts) as [string, number][];
        topStates.sort(([, a], [, b]) => b - a);
        const top10 = topStates.slice(0, 10);

        const statePct: Record<string, number> = {};
        for (const [state, count] of top10) {
            statePct[state] = (count / results) * 100;
        }

        return {
            femalePercentage,
            agePct,
            nameLenCounts,
            statePct
        };
    }, [data]);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ marginBottom: '8px' }}>% by Gender</h2>
                <p style={{ margin: 0 }}>female: {stats.femalePercentage.toFixed(1)}%</p>
                <p style={{ margin: 0 }}>male: {(100 - stats.femalePercentage).toFixed(1)}%</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ marginBottom: '8px' }}>% by Age</h2>
                {Object.entries(stats.agePct).map(([range, pct]) => (
                    <p style={{ margin: 0 }} key={range}>{range}: {pct.toFixed(1)}%</p>
                ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ marginBottom: '8px' }}>Count by Last Name</h2>
                {Object.entries(stats.nameLenCounts).map(([len, count]) => (
                    <p style={{ margin: 0 }} key={len}>{len} letter names: {count}</p>
                ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ marginBottom: '8px' }}>Count by Top State</h2>
                {Object.entries(stats.statePct).map(([st, pct]) => (
                    <p style={{ margin: 0 }} key={st}>{st}: {pct.toFixed(1)}%</p>
                ))}
            </div>
        </div>)
}

