import { Pizza } from '../../models/pizza.model';

// import action file
import * as fromPizzas from '../actions/pizzas.acton';

// state slice interface
export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

// initial state
export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false
};

// reducer function
export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch(action.type) {
    // loading event
    case fromPizzas.PizzaActionTypes.LOAD_PIZZAS : {
      return {
        ...state,
        loading: true
      }
    }

    // load success event
    case fromPizzas.PizzaActionTypes.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      }
    }

    // load fail event
    case fromPizzas.PizzaActionTypes.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }
  return state;
}
