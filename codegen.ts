import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL ||
    'http://localhost:1337/graphql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
