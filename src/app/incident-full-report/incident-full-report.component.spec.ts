import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentFullReportComponent } from './incident-full-report.component';

describe('IncidentFullReportComponent', () => {
  let component: IncidentFullReportComponent;
  let fixture: ComponentFixture<IncidentFullReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentFullReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentFullReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
