"use client";

import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label: string;
  gradient: string;
  className?: string;
  aspectRatio?: string;
}

export function PlaceholderImage({
  label,
  gradient,
  className,
  aspectRatio = "aspect-video",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl",
        aspectRatio,
        className
      )}
      style={{ background: gradient }}
    >
      <span className="max-w-[200px] text-center text-xs font-medium text-white/60">
        {label}
      </span>
    </div>
  );
}
