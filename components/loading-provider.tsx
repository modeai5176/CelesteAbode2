"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { PageLoadingSpinner } from "@/components/ui/loading-spinner"

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    // Simulate loading on route changes
    handleStart()
    const timer = setTimeout(handleComplete, 500) // Short loading time for better UX

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {children}
      {isLoading && <PageLoadingSpinner />}
    </>
  )
}
