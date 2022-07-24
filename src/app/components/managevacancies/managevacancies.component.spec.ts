import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagevacanciesComponent } from './managevacancies.component';

describe('ManagevacanciesComponent', () => {
  let component: ManagevacanciesComponent;
  let fixture: ComponentFixture<ManagevacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagevacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagevacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
