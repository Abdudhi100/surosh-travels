// src/sanity/schemaTypes/contact.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Form Entries',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Full Name',
      validation: (Rule) => Rule.required().min(2).max(100),
      description: 'Enter the full name of the sender',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email Address',
      validation: (Rule) => Rule.required().email(),
      description: 'Enter a valid email address',
    }),
    defineField({
      name: 'message',
      type: 'text',
      title: 'Message',
      validation: (Rule) => Rule.required().min(10).max(2000),
      description: 'Enter the message content (10–2000 characters)',
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Submitted At',
      initialValue: () => new Date().toISOString(),
      readOnly: true, // prevents accidental edits in Sanity Studio
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      createdAt: 'createdAt',
    },
    prepare({ title, subtitle, createdAt }) {
      return {
        title,
        subtitle: `${subtitle} • ${new Date(createdAt).toLocaleString()}`,
      }
    },
  },
})
