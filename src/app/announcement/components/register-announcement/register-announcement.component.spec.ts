import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAnnouncementComponent } from './register-announcement.component';

describe('RegisterAnnouncementComponent', () => {
  let component: RegisterAnnouncementComponent;
  let fixture: ComponentFixture<RegisterAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
