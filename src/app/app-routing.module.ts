import { SignuppasswordComponent } from './password/signuppassword/signuppassword.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgot_password/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AuthGuard } from './auth_gaurd/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "forgotpassword",
    component: ForgotpasswordComponent
  },
  {
    path: "register",
    component: SignupComponent
  },
  {
    path: "setpassword",
    component: SignuppasswordComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 