import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyapplyComponent } from './vacancyapply.component';

describe('VacancyapplyComponent', () => {
  let component: VacancyapplyComponent;
  let fixture: ComponentFixture<VacancyapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
