import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvacancyComponent } from './addvacancy.component';

describe('AddvacancyComponent', () => {
  let component: AddvacancyComponent;
  let fixture: ComponentFixture<AddvacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvacancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
