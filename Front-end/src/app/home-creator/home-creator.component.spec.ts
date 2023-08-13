import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeCreatorComponent } from './home-creator.component';

describe('HomeCreatorComponent', () => {
  let component: HomeCreatorComponent;
  let fixture: ComponentFixture<HomeCreatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
