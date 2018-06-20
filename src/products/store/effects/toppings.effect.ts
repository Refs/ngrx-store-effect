import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromServices from '../../services/toppings.service';
import * as ToppingsAction from '../actions/toppings.actions';


@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingsService: fromServices.ToppingsService
  ){}

  @Effect()
  loadingToppings$ = this.actions$.ofType(ToppingsAction.LOAD_TOPPINGS).pipe(
    switchMap(()=>{
      return this.toppingsService.getToppings().pipe(
        map((toppings) => {
          return new ToppingsAction.LoafToppingsSuccess(toppings)
        }),
        catchError((error)=>{
          return of(new ToppingsAction.LoadToppingsFail(error))
        })
      )
    })
  )
}



