import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewFAQsComponent } from './new-faqs.component';

describe('NewFAQsComponent', () => {
  let component: NewFAQsComponent;
  let fixture: ComponentFixture<NewFAQsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFAQsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFAQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
