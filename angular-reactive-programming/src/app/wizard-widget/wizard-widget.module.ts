import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardWidgetComponent } from './wizard-widget.component';
import {MatTableModule} from '@angular/material/table';
import { WizardWidgetService } from './wizard-widget.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    WizardWidgetComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    StoreModule.forFeature('wizardWidget', reducers)
  ],
  providers: [WizardWidgetService],
})
export class WizardWidgetModule { }
