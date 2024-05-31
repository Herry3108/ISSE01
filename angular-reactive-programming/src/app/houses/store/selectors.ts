import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

export const selectFeature = (state: AppStateInterface) => state.houses;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);


export const housesSelector = createSelector(
  selectFeature,
  (state) => state.houses
);


export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
