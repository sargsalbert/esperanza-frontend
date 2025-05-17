import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'http://167.172.102.131/graphql',
  uri:
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL ||
    'http://localhost:1337/graphql',
  cache: new InMemoryCache(),

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchData<T>(query: any, variables = {}): Promise<T> {
  const { data } = await client.query({ query, variables });
  return data as T;
}
