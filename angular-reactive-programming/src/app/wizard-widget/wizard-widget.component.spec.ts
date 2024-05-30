import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardWidgetComponent } from './wizard-widget.component';

describe('WizardWidgetComponent', () => {
  let component: WizardWidgetComponent;
  let fixture: ComponentFixture<WizardWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});