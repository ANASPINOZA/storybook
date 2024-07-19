import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangbuttonComponent } from './langbutton.component';

describe('LangbuttonComponent', () => {
  let component: LangbuttonComponent;
  let fixture: ComponentFixture<LangbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LangbuttonComponent]
    });
    fixture = TestBed.createComponent(LangbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
