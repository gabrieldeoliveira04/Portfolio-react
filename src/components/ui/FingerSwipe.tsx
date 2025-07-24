// components/FingerSwipeHint.tsx
"use client"
import React from "react"

export default function FingerSwipeHint() {
  return (
    <div className="md:hidden flex justify-center mt-4 animate-swipe">
      <span className="text-4xl">👉</span>
    </div>
  )
}