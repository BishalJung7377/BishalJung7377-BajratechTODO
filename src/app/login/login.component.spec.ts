import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it( 'Check initial value form logon form', ()=>{
    const loginForm = component.loginformvalidation
    const loginFormValues ={
      email: '',
      password: ''
    }
    expect (loginForm.value).toEqual(loginFormValues)
  })




  it('[Email-Check] - should check email is invalid', ()=>{
    let email = component.loginformvalidation.controls['email']
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    // expect(email.[Validators.required]).toBeTruthy();
    email.setValue('abc');
    expect(email.errors).toBeNull();
  })
  it('[Email-Check] - should check email is entered', ()=>{
    let email = component.loginformvalidation.controls['email']
    email.setValue('eve.holt@reqres.in');
    expect(email.errors).toBeNull();
  })


  it('[PAssword-Check] - should check password is Errors', ()=>{
    let password = component.loginformvalidation.controls['password']
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
    // expect (email.errors['required']).toBeTruthy();
    password.setValue('123');
    expect(password.errors).toBeNull();
  })
  it('[PAssword-Check] - should check password is valid', ()=>{
    let password = component.loginformvalidation.controls['emaipasswordl']
    password.setValue('a123asdasdA@');
    expect(password.errors).toBeNull();
  })


  it('[Form-Check] - should check Form is valid or not', ()=>{
    expect(component.loginformvalidation.valid).toBeFalsy();
  })

  it('[Form-Check] - should check Form is valid or not when value is entered', ()=>{
    component.loginformvalidation.controls['email'].setValue('eve.holt@reqres.in');
    component.loginformvalidation.controls['password'].setValue('asd1123asdasdasd');

    expect(component.loginformvalidation.valid).toBeTruthy();
  })



});
