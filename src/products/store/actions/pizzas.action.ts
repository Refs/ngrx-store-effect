import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';


export enum PizzaActionTypes {
  LOAD_PIZZAS = '[Products] Load Pizzas',
  LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail',
  LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas success',

  CREATE_PIZZA = '[Products] Create Pizza',
  CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail',
  CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success',
}

// action creators
export class LoadPizzas implements Action {
  readonly type = PizzaActionTypes.LOAD_PIZZAS;
}
export class LoadPizzasFail implements Action {
  readonly type = PizzaActionTypes.LOAD_PIZZAS_FAIL;
  constructor( public payload: any ) {
  }
}
export class LoadPizzasSuccess implements Action {
  readonly type = PizzaActionTypes.LOAD_PIZZAS_SUCCESS;
  constructor( public payload: Pizza[] ) {
  }
}

export class CreatePizza implements Action {
  readonly type = PizzaActionTypes.CREATE_PIZZA;
  constructor (public payload: Pizza ) {}
}

export class CreatePizzaFail implements Action {
  readonly type = PizzaActionTypes.CREATE_PIZZA_FAIL;
  constructor (public payload: any) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = PizzaActionTypes.CREATE_PIZZA_SUCCESS;
  constructor (public payload: Pizza) {}
}

// action types

export type PizzasAction =
  |LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess
