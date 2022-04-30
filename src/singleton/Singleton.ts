export class Singleton {
  private static _instance: Singleton
  products?: Array<string>

  private constructor() {
    this.products = []

    this.setProduct()
  }

  public static get instance(): Singleton {
    if (!this._instance) {
      console.log('singleton instance new')
      this._instance = new Singleton()
    }

    return this._instance
  }

  private setProduct() {
    const array = ['sample1', 'sample2', 'sample3']
    this.products = array
  }

  public getProduct() {
    return this.products
  }
}