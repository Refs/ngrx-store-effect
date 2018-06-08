import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import * as pizzaActions from '../actions/pizzas.acton';

import * as fromService from '../../services';

import { switchMap, map, catchError } from 'rxjs/operators';

import { of } from 'rxjs/observable/of';



@Injectable()
export class PizzasEffects {

  constructor(private actions$: Actions, private pizzasService: fromService.PizzasService) {
  }

  @Effect()
  loadPizzas$ = this.actions$
                .ofType( pizzaActions.PizzaActionTypes.LOAD_PIZZAS )
                .pipe(
                  switchMap(
                    () => {
                      return this.pizzasService
                             .getPizzas()
                             .pipe(
                               map(
                                 (pizzas) => {
                                  new pizzaActions.LoadPizzasSuccess(pizzas);
                                 }
                               ),
                               catchError(
                                 (error) => {
                                   return of( new pizzaActions.LoadPizzasFail(error) )
                                 }
                               )
                             )
                    }
                  )
                )
}
