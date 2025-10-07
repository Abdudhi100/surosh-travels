// src/sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'

// Import all custom schemas
import blog from './blog'
import service from './service'
import contact from './contact'

// Export the schema for Sanity Studio
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blog,
    service,
    contact,
    // Add more schemas here as your project grows
  ],
}
