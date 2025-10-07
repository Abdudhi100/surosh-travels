// src/app/blog/[slug]/page.tsx
"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

interface Props {
  params: { slug: string }
}

// Dummy post for Phase 3 (replace with Sanity fetch)
export default function BlogPost({ params }: Props) {
  const { slug } = params

  const post = {
    title: "Sample Post",
    date: "2025-10-06",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate.
Egestas purus viverra accumsan in nisl nisi.`,
    image: "/images/blog1.jpg",
  }

  if (!post) return notFound()

  return (
    <main className="pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto font-sans">
      {/* Hero / Title */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-navy dark:text-white mb-4">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover object-center transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-full text-navy dark:text-gold mx-auto">
        {post.content.split("\n").map((para, idx) => (
          <p key={idx} className="mb-6">
            {para}
          </p>
        ))}
      </article>

      {/* Back to Blog CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-block bg-gold text-navy font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </main>
  )
}
