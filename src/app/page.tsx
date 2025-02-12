"use client"

import Login from "@/components/auth/login";

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen"
      style={{
        background: "radial-gradient(circle at center, #00ffff, #148eb3)",
      }}>
      <div className="relative bg-white m-5 p-5 sm:p-10 rounded-xl shadow-xl w-full max-w-lg">
        <Login />
      </div>
    </main>
  )
}
