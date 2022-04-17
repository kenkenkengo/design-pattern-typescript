import { Iterator } from "@/iterator/Iterator";
import { BookShelf } from "@/iterator/BookShelf";

export class BookShelfIterator implements Iterator {
  private bookShelf: BookShelf
  private index: number

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf
    this.index = 0
  }

  public hasNext() {
    if (this.index < this.bookShelf.getLength()) {
      return true
    } else {
      return false
    }
  }

  public next() {
    return this.bookShelf.getBookAt(this.index++)
  }
}