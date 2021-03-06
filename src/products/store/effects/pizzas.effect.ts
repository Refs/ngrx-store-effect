import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import * as pizzaActions from '../actions/pizzas.action';

import * as fromService from '../../services';

import { switchMap, map, catchError } from 'rxjs/operators';

import { of } from 'rxjs/observable/of';



@Injectable()
export class PizzasEffects {

  constructor(private actions$: Actions, private pizzasService: fromService.PizzasService) {
    // console.log(pizzaActions.PizzaActionTypes.LOAD_PIZZAS)
  }

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.PizzaActionTypes.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzasService
        .getPizzas()
        .pipe(
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        );
    })
  );

  @Effect()
  createPizza$ = this.actions$.ofType(pizzaActions.PizzaActionTypes.CREATE_PIZZA).pipe(
    map((action: pizzaActions.CreatePizza) => {
      return action.payload
    }),
    switchMap((pizza) => {
      return this.pizzasService.createPizza(pizza).pipe(
        map(pizza => {
          console.log(pizza);
          return new pizzaActions.CreatePizzaSuccess(pizza)
        }),
        catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
      )
    })
  )
}
