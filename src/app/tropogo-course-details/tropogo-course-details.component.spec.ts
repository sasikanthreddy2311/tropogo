import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TropogoCourseDetailsComponent } from './tropogo-course-details.component';

describe('TropogoCourseDetailsComponent', () => {
  let component: TropogoCourseDetailsComponent;
  let fixture: ComponentFixture<TropogoCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TropogoCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TropogoCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
