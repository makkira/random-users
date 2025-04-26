import { Environment, Network, RecordSource, Store } from "relay-runtime";

async function fetchGraphQL(text: string, variables: any) {
  const response = await fetch(
    "https://nextjs-randomuser-graphql.vercel.app/api/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    }
  );
  return await response.json();
}

export const relayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new StorageEvent(new RecordSource()),
});
