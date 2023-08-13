import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BackedComponent } from './backed.component';

describe('BackedComponent', () => {
  let component: BackedComponent;
  let fixture: ComponentFixture<BackedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
