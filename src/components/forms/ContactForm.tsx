// src/components/forms/ContactForm.tsx
"use client"

import { useState, ChangeEvent, FormEvent } from "react"

type FormState = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(errorText || "Failed to submit. Please try again.")
      }

      setSubmitted(true)
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("An unexpected error occurred.")
      }
    } finally {
      setLoading(false)
    }
  }

  if (submitted)
    return (
      <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg shadow-md text-center max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
        <p>We will get back to you shortly.</p>
      </div>
    )

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto"
    >
      {error && (
        <p className="text-red-600 bg-red-50 border border-red-200 p-2 rounded text-center">
          {error}
        </p>
      )}

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition"
        required
        autoComplete="name"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition"
        required
        autoComplete="email"
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition"
        rows={5}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-navy text-white px-6 py-2 rounded-lg hover:opacity-90 transition flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
