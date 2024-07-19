import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCountComponent } from './comments-count.component';

describe('CommentsCountComponent', () => {
  let component: CommentsCountComponent;
  let fixture: ComponentFixture<CommentsCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsCountComponent]
    });
    fixture = TestBed.createComponent(CommentsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
