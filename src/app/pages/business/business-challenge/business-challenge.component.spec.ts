import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessChallengeComponent } from './business-challenge.component';

describe('BusinessChallengeComponent', () => {
  let component: BusinessChallengeComponent;
  let fixture: ComponentFixture<BusinessChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
