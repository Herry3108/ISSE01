import { createReducer, on } from "@ngrx/store";

import * as WizardWidgetActions from "./actions";
import { HousesStateInterface } from "../types/housesState.interface";


export const initialState: HousesStateInterface = {
    isLoading: false,
    houses: [],
    error: null
};

export const reducers = createReducer(
    initialState, 
    on(WizardWidgetActions.getHouses, (state) => ({ ...state, isLoading: true })),
);

