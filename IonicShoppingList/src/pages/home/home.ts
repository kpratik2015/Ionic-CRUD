import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs';
import { Item } from '../../models/item/item.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>; // $ just represents Observable

  constructor(
    public navCtrl: NavController,
    private shopping: ShoppingListService
    ) {
      this.shoppingList$ = this.shopping
        .getShoppingList() // this returns DB LIST 
        .snapshotChanges() // allows us to get both the key and value. for just  value changes: valueChanges()
        .map( // mapping each one of the changes
          changes => {
            return changes.map(c => ({ // we wanna return a new object so we write it inside paranthesis !IMPORTANT!
              key: c.payload.key, 
              ...c.payload.val(),
            }))
          }
        )  
        /*
        The mapping results to:
        {
          key: 'value',
          name: 'Apple',
          quantity: 1,
          price: 30.0 
        }
        */

    }

}
