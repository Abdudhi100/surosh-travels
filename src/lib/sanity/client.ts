// src/lib/sanity/client.ts
import { createClient, type SanityClient } from "@sanity/client"

// Helper to safely get required env vars
function getEnvVar(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

// Core Sanity config
const sanityConfig = {
  projectId: getEnvVar("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  dataset: getEnvVar("NEXT_PUBLIC_SANITY_DATASET"),
  apiVersion: "2025-10-06", // YYYY-MM-DD
  useCdn: true,             // CDN for public queries
  token: undefined,         // only set for preview/write
}

// Public client (fast, read-only, CDN enabled)
export const client: SanityClient = createClient(sanityConfig)

// Preview / server-side client (drafts, write operations)
export const previewClient: SanityClient = createClient({
  ...sanityConfig,
  token: getEnvVar("SANITY_API_TOKEN"),
  useCdn: false, // always fresh content
})

// Helper to select client based on preview mode
export const getSanityClient = (preview = false): SanityClient =>
  preview ? previewClient : client
