export class Book {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  public getName() {
    return this.name
  }
}