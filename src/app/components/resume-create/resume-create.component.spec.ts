import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCreateComponent } from './resume-create.component';

describe('ResumeCreateComponent', () => {
  let component: ResumeCreateComponent;
  let fixture: ComponentFixture<ResumeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
