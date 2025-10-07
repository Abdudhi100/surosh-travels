// src/sanity/schemaTypes/blog.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(5).max(150),
      description: 'Enter the blog post title (5–150 characters)',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'URL-friendly unique identifier for the post',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: { hotspot: true },
      description: 'Featured image for the post (used in blog list & hero)',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      validation: (Rule) => Rule.required(),
      description: 'The date this post should appear as published',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required().min(1),
      description: 'Main content of the blog post',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Optional short preview text (max 200 characters)',
      validation: (Rule) => Rule.max(200),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : 'No date',
        media,
      }
    },
  },
})
