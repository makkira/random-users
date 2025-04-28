import { useLazyLoadQuery } from "react-relay";
import { UsersQuery } from "../queries/UsersQuery";

type UserStatsProps = {
    numUsers: number;
    nat: string;
}
export default function UserStats({ numUsers, nat }: UserStatsProps) {
    // let data = useLazyLoadQuery(UsersQuery, { results: numUsers, nat }, { fetchPolicy: 'network-only' });
    return (<div>
        <p></p>
        <p>{numUsers}</p>
        <p>{nat}</p>
    </div>)
}