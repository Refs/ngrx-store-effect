import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';


// the feature module state which is the slice of entire state, and contain all state slice in module itself;
export interface ProductsState {
  pizzas: fromPizzas.PizzaState,
}

// register reducer
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
}

// export declare function createFeatureSelector<T>(featureName: string): MemoizedSelector<object, T>;
// feature module state selector
export const getProductsState = createFeatureSelector<ProductsState>('products');


