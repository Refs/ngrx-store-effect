import {
  Pizza
} from '../../models/pizza.model';

// import action file
import * as fromPizzas from '../actions/pizzas.action';

// state slice interface
export interface PizzaState {
  // data: Pizza[];
  entities: {[id: number]: Pizza}
  loaded: boolean;
  loading: boolean;
}

// initial state
export const initialState: PizzaState = {
  // data: [],
  entities: {},
  loaded: false,
  loading: false
};

// reducer function
export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    // loading event
    case fromPizzas.PizzaActionTypes.LOAD_PIZZAS:
      {
        return {
          ...state,
          loading: true
        }
      }

      // load success event
    case fromPizzas.PizzaActionTypes.LOAD_PIZZAS_SUCCESS:
      {
        // console.log(action.payload);
        // const data = action.payload;
        const pizzas = action.payload;
        const entities = pizzas.reduce(
          (entities: {[id: number]: Pizza}, pizza: Pizza) => {
            return {
              ...entities,
              [pizza.id]: pizza
            }
          }
          ,{
             ...state.entities
          }
        )
        return {
          ...state,
          loading: false,
          loaded: true,
          entities
        }
      }

      // load fail event
    case fromPizzas.PizzaActionTypes.LOAD_PIZZAS_FAIL:
      {
        return {
          ...state,
          loading: false,
          loaded: false
        }
      }

    case fromPizzas.PizzaActionTypes.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza
      };
      return {
        ...state,
        entities
      }
    }
  }
  return state;
}

// selectors
export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;
