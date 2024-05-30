import { createReducer, on } from "@ngrx/store";
import { HousesStateInterface } from "../types/housesState.interface";
import * as WizardWidgetActions from "./actions";


export const initialState: HousesStateInterface = {
    isLoading: false,
    houses: [],
    error: null
};

export const reducers = createReducer(
    initialState, 
    on(WizardWidgetActions.getHouse, (state) => ({ ...state, isLoading: true  }))
);

