import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  items: Item[] = [
    { id: 1, name: "Iphone", price: 2000, quantity: 3 },
    { id: 2, name: "Android", price: 200, quantity: 9 },
    { id: 3, name: "Laptop", price: 20000, quantity: 5 },
    { id: 4, name: "Tablet", price: 2000, quantity: 1 }
  ];

  getItems(): Item[] {
    return this.items;
  }
}
