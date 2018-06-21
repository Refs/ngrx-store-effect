import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';

import * as fromFeature from '../reducers';

import * as fromToppings from '../reducers/toppings.reducer';

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
)

export const getSelectedToppings = createSelector(
  getToppingsState,
  fromToppings.getSelectedToppings
)

export const getToppingsEntities = createSelector(
  getToppingsState,
  fromToppings.getToppingsEntities
)

export const getAllToppings = createSelector(
  getToppingsEntities,
  (entites) => {
    return Object.keys(entites).map((id)=>{
      return entites[parseInt(id,10)]
    })
  }
)

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
)

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
)
