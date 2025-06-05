/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   // uri: 'http://167.172.102.131/graphql',
//   uri:
//     process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL ||
//     'http://localhost:1337/graphql',
//   cache: new InMemoryCache(),

//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: 'no-cache',
//     },
//   },
// });

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function fetchData<T>(query: any, variables = {}): Promise<T> {
//   const { data } = await client.query({ query, variables });
//   return data as T;
// }

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import https from 'https';
import fetch from 'cross-fetch';

// Create an https.Agent that ignores SSL errors
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const customFetch: typeof fetch = (input, init = {}) => {
  return fetch(input, {
    ...init,
    agent: httpsAgent,
  } as any); // safe in this context for Node.js
};

const client = new ApolloClient({
  link: new HttpLink({
    uri:
      process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL ||
      'http://localhost:1337/graphql',
    fetch: customFetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
});

export async function fetchData<T>(query: any, variables = {}): Promise<T> {
  const { data } = await client.query({ query, variables });
  return data as T;
}
