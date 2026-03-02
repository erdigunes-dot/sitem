"use client"

import { Heart, MapPin, Maximize, BedDouble, Bath, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface PropertyCardProps {
  image: string
  title: string
  location: string
  price: string
  rooms: string
  area: string
  baths: string
  badge?: string
  badgeVariant?: "default" | "secondary"
}

export function PropertyCard({
  image,
  title,
  location,
  price,
  rooms,
  area,
  baths,
  badge,
  badgeVariant = "default",
}: PropertyCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />

        {/* Badge */}
        {badge && (
          <Badge
            variant={badgeVariant}
            className={`absolute left-3 top-3 ${
              badgeVariant === "default"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {badge}
          </Badge>
        )}

        {/* Favorite button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-all hover:bg-background"
          aria-label="Favorilere ekle"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              liked ? "fill-red-500 text-red-500" : "text-foreground"
            }`}
          />
        </button>

        {/* Price overlay */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xl font-bold text-secondary-foreground font-mono">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-1">
          {title}
        </h3>
        <p className="mb-3 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {location}
        </p>

        {/* Details */}
        <div className="flex items-center gap-4 border-t border-border pt-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BedDouble className="h-3.5 w-3.5" />
            <span>{rooms}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Bath className="h-3.5 w-3.5" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Maximize className="h-3.5 w-3.5" />
            <span>{area}</span>
          </div>
          <div className="ml-auto">
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}
