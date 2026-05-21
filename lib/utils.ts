import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Deterministic key derived from content (survives reorder when item identity is the blob).
 * `occurrenceInRun` distinguishes equal strings in the same list (0-based among prior matches).
 */
export function stableContentKey(part: string, occurrenceInRun = 0): string {
  const normalized = typeof part === "string" ? part : String(part ?? "")
  let h = 5381
  for (let i = 0; i < normalized.length; i += 1) {
    h = ((h << 5) + h) ^ normalized.charCodeAt(i)
  }
  const hash = (h >>> 0).toString(36)
  const occSuffix = occurrenceInRun > 0 ? `:o${occurrenceInRun}` : ""
  return `${hash}:${normalized.length}${occSuffix}`
}

/** Use when keys must come from parallel string arrays without CMS `_key`s. */
export function stableKeyAtIndex(parts: readonly string[], index: number): string {
  const text = parts[index] ?? ""
  const duplicatesBefore = parts.slice(0, index).filter((p) => p === text).length
  return stableContentKey(text, duplicatesBefore)
}
