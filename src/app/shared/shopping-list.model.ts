export class ShoppingList {
  public name: string;
  public description: string;
  public imagePath: string;
  public price: number;
  constructor(name: string, price: number, imagePath:string , description: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.price = price;
  }
}