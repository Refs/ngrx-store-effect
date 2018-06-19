import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';

import * as fromPizzas from '../reducers/pizzas.reducer';

import * as fromRoot from '../../../app/store';


// pizzas selector
export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
)

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
)

export const getSelectedPizza = createSelector(
  fromRoot.getRouterState,
  getPizzasEntities,
  (router, entities) => {
    return router.state && entities[router.state.params.PizzaId]
  }
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
