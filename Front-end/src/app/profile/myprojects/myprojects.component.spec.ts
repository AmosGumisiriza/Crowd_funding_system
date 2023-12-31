import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyprojectsComponent } from './myprojects.component';

describe('MyprojectsComponent', () => {
  let component: MyprojectsComponent;
  let fixture: ComponentFixture<MyprojectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
