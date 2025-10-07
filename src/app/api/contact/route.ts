// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"

// POST /api/contact
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const token = process.env.SANITY_API_TOKEN
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

    // Sanity mutation payload
    const body = JSON.stringify({
      mutations: [
        {
          create: {
            _type: "contact",
            name,
            email,
            message,
            createdAt: new Date().toISOString(),
          },
        },
      ],
    })

    const res = await fetch(
      `https://${projectId}.api.sanity.io/v2025-10-06/data/mutate/${dataset}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body,
      }
    )

    if (!res.ok) {
      const errorText = await res.text()
      console.error("Sanity error:", errorText)
      return NextResponse.json({ error: "Failed to save contact. Please try again." }, { status: 500 })
    }

    return NextResponse.json({ message: "Success" })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
