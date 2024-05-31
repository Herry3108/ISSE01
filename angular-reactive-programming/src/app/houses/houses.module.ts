import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { HousesService } from './services/houses.service';
import { HousesComponent } from './components/houses.component';
import { EffectsModule } from '@ngrx/effects';
import { HousesEffects } from './store/effects';

@NgModule({     
  imports: [
    CommonModule,
    StoreModule.forFeature('houses', reducers),
    EffectsModule.forFeature([HousesEffects])
  ],
  providers: [HousesService],
  declarations: [HousesComponent],
  exports: [HousesComponent],
})
export class HousesModule { }