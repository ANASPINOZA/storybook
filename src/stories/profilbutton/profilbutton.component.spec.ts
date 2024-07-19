import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilbuttonComponent } from './profilbutton.component';

describe('ProfilbuttonComponent', () => {
  let component: ProfilbuttonComponent;
  let fixture: ComponentFixture<ProfilbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilbuttonComponent]
    });
    fixture = TestBed.createComponent(ProfilbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
