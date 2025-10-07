// src/app/blog/page.tsx
import { client } from "@/lib/sanity/client"
import { allPostsQuery } from "@/lib/sanity/queries"
import Link from "next/link"
import Image from "next/image"

interface Post {
  _id: string
  title: string
  slug: string
  mainImage?: { url: string }
  publishedAt: string
  excerpt: string
}

export default async function BlogPage() {
  // Fetch posts from Sanity
  const posts: Post[] = await client.fetch(allPostsQuery)

  return (
    <main className="pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto font-sans">
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-navy dark:text-white mb-12">
        Blog
      </h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-white dark:bg-navy rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            {/* Image */}
            {post.mainImage?.url && (
              <div className="relative w-full h-56 sm:h-64 md:h-48 lg:h-56">
                <Image
                  src={post.mainImage.url}
                  alt={post.title}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between text-navy dark:text-gold">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-base leading-relaxed">{post.excerpt}</p>
              </div>
              <span className="mt-4 text-gold font-semibold underline group-hover:text-opacity-80 transition">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
