"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { Loader2, Send } from "lucide-react"

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
      <div className="bg-[#F7F8FA] border border-[#C0C4C9] text-[#0A1E3F] p-8 rounded-2xl shadow-lg text-center max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-3 text-[#0A1E3F]">Thank you!</h2>
        <p className="text-[#1F2933]">We’ve received your message and will reach out shortly.</p>
      </div>
    )

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-lg border border-[#F7F8FA] max-w-md mx-auto transition-all hover:shadow-xl"
    >
      <h2 className="text-2xl font-bold text-[#0A1E3F] mb-2">Get in Touch</h2>
      <p className="text-sm text-[#1F2933] mb-4">We’re here to assist with all your travel needs.</p>

      {error && (
        <p className="text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg text-center">
          {error}
        </p>
      )}

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="border border-[#C0C4C9] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition text-[#0A1E3F] placeholder-[#C0C4C9]"
        required
        autoComplete="name"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="border border-[#C0C4C9] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition text-[#0A1E3F] placeholder-[#C0C4C9]"
        required
        autoComplete="email"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="border border-[#C0C4C9] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition text-[#0A1E3F] placeholder-[#C0C4C9]"
        rows={5}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="flex justify-center items-center gap-2 bg-[#4DA6FF] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#0A1E3F] hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin w-5 h-5" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
