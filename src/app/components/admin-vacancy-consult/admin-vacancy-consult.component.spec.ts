import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacancyConsultComponent } from './admin-vacancy-consult.component';

describe('AdminVacancyConsultComponent', () => {
  let component: AdminVacancyConsultComponent;
  let fixture: ComponentFixture<AdminVacancyConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVacancyConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVacancyConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
