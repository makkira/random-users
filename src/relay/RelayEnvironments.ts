import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

async function fetchGraphQL(
  operation: RequestParameters,
  variables: Variables
) {
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
