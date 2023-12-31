import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PledgeComponent } from './pledge.component';

describe('PledgeComponent', () => {
  let component: PledgeComponent;
  let fixture: ComponentFixture<PledgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
