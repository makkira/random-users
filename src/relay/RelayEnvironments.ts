import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

function generateMockUsers(
  count: number,
  nat: string
): Array<{
  gender: string;
  name: { last: string };
  dob: { age: number };
  location: { state: string };
  nat: string;
}> {
  const states = ["CA", "NY", "TX", "FL", "IL", "PA", "OH", "GA", "NC", "MI"];
  const ageBuckets: Array<[number, number]> = [
    [0, 20],
    [21, 40],
    [41, 60],
    [61, 80],
    [81, 100],
    [101, 120],
  ];

  return Array.from({ length: count }, () => {
    const [minAge, maxAge] =
      ageBuckets[Math.floor(Math.random() * ageBuckets.length)];

    return {
      gender: Math.random() < 0.5 ? "female" : "male",
      name: {
        last: Array.from({ length: Math.ceil(Math.random() * 10) })
          .map(() => String.fromCharCode((65 + Math.random() * 26) | 0))
          .join(""),
      },
      dob: { age: Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge },
      location: { state: states[(Math.random() * states.length) | 0] },
      nat,
    };
  });
}

async function fetchGraphQL(
  operation: RequestParameters,
  variables: Variables
) {
  if (
    process.env.NODE_ENV === "development" &&
    operation.name === "UsersQuery"
  ) {
    const { results, nat } = variables as { results: number; nat: string };
    return {
      data: {
        users: generateMockUsers(results, nat),
      },
    };
  }

  const response = await fetch(
    "https://nextjs-randomuser-graphql.vercel.app/api/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }
  );
  return await response.json();
}

const network = Network.create(fetchGraphQL);
const store = new Store(new RecordSource());

const relayEnvironment = new Environment({
  network,
  store,
});
export default relayEnvironment;
