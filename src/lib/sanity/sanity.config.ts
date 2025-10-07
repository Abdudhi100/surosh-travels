// src/lib/sanity/sanity.config.ts
import { defineConfig } from "sanity"

// Environment-aware: switch CDN usage for preview/draft mode
const isPreview = process.env.NEXT_PUBLIC_SANITY_PREVIEW === "true"

export const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "f8cpdebi",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-10-06",        // stable API version
  useCdn: !isPreview,              // fast public queries unless preview
  ignoreBrowserTokenWarning: true, // suppress dev warnings
})
