// src/lib/sanity/queries.ts

/**
 * Fetch all blog posts, ordered by published date descending.
 * Includes a 200-character excerpt for preview cards.
 */
export const allPostsQuery = `
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  body,
  "excerpt": pt::text(body)[0...200] // short preview for UI
}
`

/**
 * Fetch a single post by slug
 * Returns full content for the blog post page
 */
export const postBySlugQuery = (slug: string) => `
*[_type == "post" && slug.current == "${slug}"][0]{
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  body
}
`

/**
 * Fetch all services
 * Returns title, description, icon, and image
 */
export const allServicesQuery = `
*[_type == "service"] {
  _id,
  title,
  description,
  icon,
  image
}
`

/**
 * Mutation for creating a contact submission
 * Can be executed via the Sanity client (server-side or preview)
 */
export const createContactMutation = (name: string, email: string, message: string) => ({
  mutations: [
    {
      create: {
        _type: "contact",
        name,
        email,
        message,
        createdAt: new Date().toISOString()
      }
    }
  ]
})
