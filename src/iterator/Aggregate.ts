import { Iterator } from "@/iterator/Iterator"

export interface Aggregate {
  iterator(): Iterator
}