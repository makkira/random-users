import { useLazyLoadQuery } from "react-relay";
import { UsersQuery } from "../queries/UsersQuery";
import type { UsersQuery as UsersQueryType } from '../queries/__generated__/UsersQuery.graphql';
import StatsCard from "./StatsCard";
import styles from '../styles/UserStats.module.css';
import useUserStats from "../hooks/useUserStats";
import GenericPie from "./GenericPie";


type UserStatsProps = {
    results: number;
    nat: string;
}
export default function UserStats({ results, nat }: UserStatsProps) {
    const data = useLazyLoadQuery<UsersQueryType>(UsersQuery, { results: results, nat }, { fetchPolicy: 'network-only' });
    const { femalePercentage,
        agePct,
        nameLenCounts,
        statePct } = useUserStats({ users: data.users, total: results });


    const ageData = Object.entries(agePct).map(
        ([range, pct]) => ({ name: range, value: pct })
    );

    const nameLenData = Object.entries(nameLenCounts)
        .map(([len, count]) => ({ name: `${len} letters`, value: count }));

    const stateData = Object.entries(statePct)
        .map(([st, pct]) => ({ name: st, value: pct }));

    return (
        <>
            {
                results < 1 ? <p>No Results</p> :
                    <div className={styles.container}>

                        <StatsCard
                            title="% by Gender"
                            children={<>
                                <p>female: {femalePercentage.toFixed(1)}%</p>
                                <p >male: {(100 - femalePercentage).toFixed(1)}%</p>

                            </>
                            }
                            chart={<GenericPie data={[
                                { name: 'Female', value: femalePercentage },
                                { name: 'Male', value: 100 - femalePercentage },
                            ]} />}
                        />
                        <>
                            <StatsCard
                                title="% by Age"
                                children={Object.entries(agePct).map(([range, pct]) => (
                                    <p key={range}>{range}: {pct.toFixed(1)}%</p>
                                ))}
                                chart={<GenericPie data={ageData} />} />
                        </>
                        <StatsCard
                            title="Count by Last Name"
                            children={Object.entries(nameLenCounts).map(([len, count]) => (
                                <p key={len}>{len} letter names: {count}</p>
                            ))}
                            chart={<GenericPie data={nameLenData} />} />
                        <StatsCard
                            title="Count by Location"
                            children={Object.entries(statePct).map(([st, pct]) => (
                                <p key={st}>{st}: {pct.toFixed(1)}%</p>
                            ))}
                            chart={<GenericPie data={stateData}
                            />} />
                    </div >
            }
        </>
    )
}

