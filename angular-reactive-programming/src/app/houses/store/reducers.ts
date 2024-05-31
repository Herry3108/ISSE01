import { createReducer, on } from "@ngrx/store";

import * as HousesActions from "./actions";
import { HousesStateInterface } from "../types/housesState.interface";


export const initialState: HousesStateInterface = {
    isLoading: false,
    houses: [],
    error: null
};

export const reducers = createReducer(
    initialState, 
    on(HousesActions.getHouses, (state) => ({ ...state, isLoading: true })),
    on(HousesActions.getHousesSuccess, (state, action) => ({ 
        ...state, 
        isLoading: false, 
        houses: action.houses 
    })),
    on(HousesActions.getHousesFailure, (state, action) => ({ 
        ...state, 
        isLoading: false, 
        error: action.error 
    }))
);

