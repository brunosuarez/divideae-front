import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingAnnouncementComponent } from './listing-announcement.component';

describe('ListingAnnouncementComponent', () => {
  let component: ListingAnnouncementComponent;
  let fixture: ComponentFixture<ListingAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
