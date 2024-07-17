import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbuttonComponent } from './mainbutton.component';

describe('MainbuttonComponent', () => {
  let component: MainbuttonComponent;
  let fixture: ComponentFixture<MainbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainbuttonComponent]
    });
    fixture = TestBed.createComponent(MainbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
