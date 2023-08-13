import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginCreatorComponent } from './login-creator.component';

describe('LoginCreatorComponent', () => {
  let component: LoginCreatorComponent;
  let fixture: ComponentFixture<LoginCreatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
