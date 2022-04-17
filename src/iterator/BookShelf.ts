import { Aggregate } from "@/iterator/Aggregate";
import { Book } from "@/iterator/Book";
import { BookShelfIterator } from "@/iterator/BookShelfIterator";

export class BookShelf implements Aggregate {
  private books: Array<Book>
  private last: number

  constructor(maxsize: number) {
    this.books = new Array(maxsize)
    this.last = 0
  }

  public getBookAt(index: number) {
    return this.books[index]
  }

  public appendBook(book: Book) {
    this.books[this.last++] = book
  }

  public getLength() {
    return this.last
  }

  public iterator() {
    return new BookShelfIterator(this)
  }
}