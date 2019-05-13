import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTravelersComponent } from './admin-travelers.component';

describe('AdminTravelersComponent', () => {
  let component: AdminTravelersComponent;
  let fixture: ComponentFixture<AdminTravelersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTravelersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTravelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
