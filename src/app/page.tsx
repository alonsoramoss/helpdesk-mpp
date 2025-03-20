"use client"

import Login from "@/components/auth/login";

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/fondomuni.jpg')",
        // background: "radial-gradient(circle at center, #00ffff, #148eb3)",
      }}>
      <div className="m-5 rounded-xl shadow-2xl w-full max-w-lg">
        <Login />
      </div>
    </main>
  )
}
