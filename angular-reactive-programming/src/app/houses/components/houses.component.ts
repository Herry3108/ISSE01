import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as HouseActions from '../store/actions';
import { errorSelector, housesSelector, isLoadingSelector } from '../store/selectors';
import { HouseInterface } from '../types/house.interface';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  houses!: HouseInterface[] | [];
  error$: Observable<string | null>;

  displayedColumns: string[] = ['name', 'founder', 'element'];

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.store.pipe(select(housesSelector)).subscribe(houses => this.houses = houses);
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(HouseActions.getHouses());
  }
}
