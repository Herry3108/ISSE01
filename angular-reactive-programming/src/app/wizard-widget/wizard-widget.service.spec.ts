import { TestBed } from '@angular/core/testing';

import { WizardWidgetService } from './wizard-widget.service';

describe('WizardWidgetService', () => {
  let service: WizardWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
