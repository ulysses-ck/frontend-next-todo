import type { CreateClientConfig } from '@/client/client.gen'

// this client loads the base url from env
// and sets it in the config when the client is created

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: process.env.BACKEND_URL,
});