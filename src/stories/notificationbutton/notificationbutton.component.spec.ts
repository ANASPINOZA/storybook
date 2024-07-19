import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationbuttonComponent } from './notificationbutton.component';

describe('NotificationbuttonComponent', () => {
  let component: NotificationbuttonComponent;
  let fixture: ComponentFixture<NotificationbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationbuttonComponent]
    });
    fixture = TestBed.createComponent(NotificationbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
