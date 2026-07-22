import React from 'react'

function AuthLayout({children}:{children: React.ReactNode}) {
  return (
    <main className="min-h-screen bg-[#060E20] flex flex-col">
        {children}
    </main>
  )
}

export default AuthLayout