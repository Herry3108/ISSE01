import { createAction, props } from "@ngrx/store";
import { HouseInterface } from "../types/house.interface";

export const getHouses = createAction('[Houses] Get Houses');

export const getHousesSuccess = createAction(
    '[Houses] Get Houses success', 
    props<{ houses: HouseInterface[] }>()
);

export const getHousesFailure = createAction(
    '[Houses] Get Houses failure',
    props<{ error: string }>()
);