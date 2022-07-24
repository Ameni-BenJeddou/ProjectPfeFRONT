import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApplicationConsultComponent } from './admin-application-consult.component';

describe('AdminApplicationConsultComponent', () => {
  let component: AdminApplicationConsultComponent;
  let fixture: ComponentFixture<AdminApplicationConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApplicationConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApplicationConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
