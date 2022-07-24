import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTrackComponent } from './app-track.component';

describe('AppTrackComponent', () => {
  let component: AppTrackComponent;
  let fixture: ComponentFixture<AppTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
