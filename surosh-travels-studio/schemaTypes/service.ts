// src/sanity/schemaTypes/service.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(3).max(100),
      description: 'The name of the service (3–100 characters)',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required().min(10).max(1000),
      description: 'A short description of the service (10–1000 characters)',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon',
      validation: (Rule) => Rule.max(2),
      description:
        'Optional single character or emoji to represent the service if no image is provided',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Service Image',
      options: { hotspot: true },
      description:
        'Optional image to represent the service. Overrides the icon if provided',
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
      description: 'Automatically set when the service is created',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? subtitle.slice(0, 60) + '…' : '',
        media,
      }
    },
  },
})
