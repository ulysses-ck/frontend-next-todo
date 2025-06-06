import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: process.env.BACKEND_URL + '/v3/api-docs',
  output: 'src/client',
  plugins: [{
    name: '@hey-api/client-fetch',
    baseUrl: false,
    runtimeConfigPath: './src/backend-client.ts',
  }],
});