import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard-widget',
  templateUrl: './wizard-widget.component.html',
  styleUrls: ['./wizard-widget.component.scss']
})
export class WizardWidgetComponent {
  dataSource: CdkTableDataSourceInput<object> = [];
}
