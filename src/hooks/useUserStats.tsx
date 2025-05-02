import { useMemo } from "react";
import { UsersQuery$data as UserQueryData } from "../queries/__generated__/UsersQuery.graphql";

interface UseUserStatsArgs {
    users: UserQueryData["users"];
    total: number;
}

export default function useUserStats({ users, total }: UseUserStatsArgs) {
    return useMemo(() => {
        console.log('useUserStats', { users, total });

        if (total < 1 || !users?.length) {
            return {
                femalePercentage: 0,
                agePct: {},
                nameLenCounts: {},
                statePct: {},
            };
        }

        const arr = users ?? [];
        const femalePercentage = Number(((arr.filter(g => g?.gender === 'female').length / total) * 100).toFixed(1));

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
            agePct[label] = (count / total) * 100;
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
            statePct[state] = (count / total) * 100;
        }

        return {
            femalePercentage,
            agePct,
            nameLenCounts,
            statePct
        };
    }, [users, total]);

}