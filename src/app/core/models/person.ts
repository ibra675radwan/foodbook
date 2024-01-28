export class Person {
    id?: number;
    firstName: string;
    price: string;
    Ingrediants: string;
  
    constructor(id: number , firstName: string = '' , Ingrediants: string = '', price: string ='') {
      this.id = id;
      this.firstName = firstName;
      this.price = price;
      this.Ingrediants = Ingrediants;
    }

}
