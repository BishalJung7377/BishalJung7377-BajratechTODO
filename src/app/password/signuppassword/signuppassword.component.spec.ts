import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppasswordComponent } from './signuppassword.component';

describe('SignuppasswordComponent', () => {
  let component: SignuppasswordComponent;
  let fixture: ComponentFixture<SignuppasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuppasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuppasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
