import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingStatusTableComponent } from './table';

describe('ProcessingStatusTableComponent', () => {
  let component: ProcessingStatusTableComponent;
  let fixture: ComponentFixture<ProcessingStatusTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessingStatusTableComponent],
    });
    fixture = TestBed.createComponent(ProcessingStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
