export class ShoppingList {
  public name: string;
  public description: string;
  public imageUrl: string;
  public price: number;
  constructor(name: string, price: number, imageUrl:string , description: string) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}