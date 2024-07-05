import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonstoryComponent } from './buttonstory.component';

describe('ButtonstoryComponent', () => {
  let component: ButtonstoryComponent;
  let fixture: ComponentFixture<ButtonstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonstoryComponent]
    });
    fixture = TestBed.createComponent(ButtonstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
