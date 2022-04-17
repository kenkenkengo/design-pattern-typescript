import { Book } from "@/iterator/Book"

export interface Iterator {
  hasNext(): boolean
  next(): Book
}