import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyApplicationsComponent } from './vacancy-applications.component';

describe('VacancyApplicationsComponent', () => {
  let component: VacancyApplicationsComponent;
  let fixture: ComponentFixture<VacancyApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
