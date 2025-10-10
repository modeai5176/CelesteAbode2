"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageLoaderProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  sizes?: string
  quality?: number
  priority?: boolean
  loading?: "lazy" | "eager"
  fill?: boolean
}

export function ImageLoader({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  quality = 85,
  priority = false,
  loading = "lazy",
  fill = false,
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={cn(
          "bg-muted flex items-center justify-center text-muted-foreground",
          className
        )}
        style={fill ? {} : { width, height }}
      >
        <span className="text-sm">Image not available</span>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-muted animate-pulse rounded-md",
            className
          )}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={loading}
        fill={fill}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
      />
    </div>
  )
}
