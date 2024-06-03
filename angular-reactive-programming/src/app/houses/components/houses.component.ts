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
  isLoading: boolean = false;
  houses!: HouseInterface[] | [];

  displayedColumns: string[] = ['name', 'founder', 'element'];

  constructor(private store: Store<AppStateInterface>) {
    this.store.pipe(select(isLoadingSelector)).subscribe(isLoading => this.isLoading = isLoading);
    this.store.pipe(select(housesSelector)).subscribe(houses => {
      this.houses = houses
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(HouseActions.getHouses());
  }
}
