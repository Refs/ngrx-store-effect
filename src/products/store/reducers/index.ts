import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

import * as fromToppings from './toppings.reducer';

// the feature module state which is the slice of entire state, and contain all state slice in module itself;
export interface ProductsState {
  pizzas: fromPizzas.PizzaState,
  toppings: fromToppings.ToppingsState
}

// register reducer
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer
}

// export declare function createFeatureSelector<T>(featureName: string): MemoizedSelector<object, T>;
// feature module state selector
export const getProductsState = createFeatureSelector<ProductsState>('products');


