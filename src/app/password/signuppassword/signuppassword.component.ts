import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SignupserviceService } from 'src/app/services/SignupApi/signupservice.service';
import { passwordupperCase, specialeChars, numericPass, Validateconfirmpassword } from '../../Validator/validate';
import { SignupUserData } from 'src/app/signup/SignUpUserData';


@Component({
  selector: 'app-signuppassword',
  templateUrl: './signuppassword.component.html',
  styleUrls: ['./signuppassword.component.css']
})
export class SignuppasswordComponent implements OnInit {
  title = "TODO APP";
  signupdata: SignupUserData = new SignupUserData();
  PasswordForm !: FormGroup
  logintext = "Login"
  hide = true;
  hidenew = true;
  npassword: any;
  submit = false;
  newpassword !: string;
  cpassword !: string;
  emailSent = "Email has been sent!"
  resetTxt = "Please check your inbox and click in the recieved link to reset password";




  constructor(
    private formBuilder: FormBuilder,
    public signupAuth: SignupserviceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.PasswordForm = this.formBuilder.group({
      newpassword: ['',
        [Validators.required,
        Validators.minLength(8),
        passwordupperCase(),
        specialeChars(),
        numericPass()
        ]
      ],
      cpassword: ['', [Validators.required],]
    }, { validators: Validateconfirmpassword() })
  }
  get nepassword() {
    return this.PasswordForm.get('newpassword');
  }

  get confirmpassword() {
    return this.PasswordForm.get('cpassword');
  }

  setPassword(passwordData: any) {
    console.log(passwordData);

    if (this.PasswordForm.valid) {
      this.signupdata = this.signupAuth.userData
      this.signupdata.name= this.signupdata.name
      this.signupdata.email= this.signupdata.email
      this.signupdata.date= this.signupdata.date
      this.signupdata.phone= this.signupdata.phone
      this.signupdata.password= this.PasswordForm.value.cpassword
      this.signupdata.gender= this.signupdata.gender
      this.signupAuth.userSignUp(this.signupdata).
      subscribe(
        (response) => {
          console.log(response);

        }
      )
    }
    else {
      console.warn("Error User")
    }
  }

}
