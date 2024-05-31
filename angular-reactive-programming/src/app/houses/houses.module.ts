import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { HousesService } from '../houses.service';
import { HousesComponent } from './components/houses.component';

@NgModule({     
  imports: [
    CommonModule,
    StoreModule.forFeature('houses', reducers)
  ],
  providers: [HousesService],
  declarations: [HousesComponent],
  exports: [HousesComponent],
})
export class HousesModule { }
