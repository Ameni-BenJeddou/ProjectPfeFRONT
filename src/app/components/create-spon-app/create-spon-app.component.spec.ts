import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSponAppComponent } from './create-spon-app.component';

describe('CreateSponAppComponent', () => {
  let component: CreateSponAppComponent;
  let fixture: ComponentFixture<CreateSponAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSponAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSponAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
