import { Component } from '@angular/core';
import { WizardWidgetModule } from '../wizard-widget/wizard-widget.module';


@Component({
  selector: 'app-body',
  standalone: true,
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  imports: [WizardWidgetModule]
})
export class BodyComponent {
}
