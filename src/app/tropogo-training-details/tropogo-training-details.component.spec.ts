import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TropogoTrainingDetailsComponent } from './tropogo-training-details.component';

describe('TropogoTrainingDetailsComponent', () => {
  let component: TropogoTrainingDetailsComponent;
  let fixture: ComponentFixture<TropogoTrainingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TropogoTrainingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TropogoTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
