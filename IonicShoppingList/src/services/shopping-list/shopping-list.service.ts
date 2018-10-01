import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";

@Injectable() // as we'll be using constructor to inject angular fire database
export class ShoppingListService {

    private shoppingListRef = this.db.list<Item>('shopping-list'); // ideally we'll need a reference to shopping list in firebase

    constructor(private db: AngularFireDatabase) { }

    getShoppingList() {
        return this.shoppingListRef;
    }

    addItem(item: Item) {
        return this.shoppingListRef.push(item);
    }

    editItem(item:Item) {
        return this.shoppingListRef.update(item.key, item);
    }
}