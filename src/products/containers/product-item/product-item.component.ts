import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import * as fromStore from '../../store';

import { Pizza } from '../../models/pizza.model';

import { Topping } from '../../models/topping.model';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor( private store: Store<fromStore.ProductsState> ) {}

  ngOnInit() {
    // this.store.dispatch(new fromStore.LoadToppings());
    this.pizza$ = this.store.select(fromStore.getSelectedPizza).pipe(
      tap((pizza: Pizza)=>{
        const ToppingExist = !!(pizza&&pizza.toppings);
        const selectedToppings = ToppingExist
          ? pizza.toppings.map(topping => topping.id)
          : []
        this.store.dispatch(new fromStore.VisualiseToppings(selectedToppings))
      })
    );
    this.toppings$ = this.store.select(fromStore.getAllToppings);
    this.visualise$ = this.store.select(fromStore.getPizzaVisualised)
  }

  onSelect(event: number[]) {
    // console.log('onSelect:::', event)
    this.store.dispatch(new fromStore.VisualiseToppings(event));
  }

  onCreate(event: Pizza) {}

  onUpdate(event: Pizza) {}

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
    }
  }
}
