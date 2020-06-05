import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerFeatureLoadComponent } from './eager-feature-load.component';

describe('EagerFeatureLoadComponent', () => {
  let component: EagerFeatureLoadComponent;
  let fixture: ComponentFixture<EagerFeatureLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerFeatureLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerFeatureLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
