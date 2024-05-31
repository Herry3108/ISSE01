import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as HousesActions from "./actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { HousesService } from "../services/houses.service";
import { of } from "rxjs";

@Injectable()
export class HousesEffects {
    getHouses$ = createEffect(() => this.actions$.pipe(
        ofType(HousesActions.getHouses),
        mergeMap(() => {
            return this.housesService
                .getHouses()
                .pipe(
                    map(houses => HousesActions.getHousesSuccess({ houses })),
                    catchError(error => of(HousesActions.getHousesFailure({ error: error.message }))
                )
            );
        })
    ));

    constructor(private actions$: Actions, private housesService: HousesService) {}
}