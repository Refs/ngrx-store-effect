import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';


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

// pizzas selector
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
)

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
)

// data selector
export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities) => {
    return Object.keys(entities).map(
      (id) => {
       return entities[parseInt(id)];
      }
    )
  }
)

// loaded selector
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
)

// loading selector
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
)

