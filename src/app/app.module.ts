import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgot_password/forgotpassword.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatButtonModule} from "@angular/material/button"
import {MatSliderModule} from "@angular/material/slider";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterceptorServiceService } from './services/interceptor-service.service';
import { SignupComponent } from './signup/signup.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {MatCardModule} from '@angular/material/card';
import { SignuppasswordComponent } from './password/signuppassword/signuppassword.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './Dashboard/nav_bar/navbar.component'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { OverviewComponent } from './Dashboard/overview/overview.component';
import { TodaytasklistComponent } from './Dashboard/today_task_list/todaytasklist.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ListnameComponent } from './Dashboard/list_name/listname.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './Modal/modal/modal.component';
import { MmodalAddnewTaskComponent } from './Modal/mmodal-addnew-task/mmodal-addnew-task.component';
import {MatSelectModule} from '@angular/material/select';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AuthGuard } from './auth_gaurd/auth.guard';










import {
  NgxMatDatetimePickerModule, 
  NgxMatNativeDateModule, 
  NgxMatTimepickerModule 
} from '@angular-material-components/datetime-picker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    SignupComponent,
    SignuppasswordComponent,
    DashboardComponent,
    NavbarComponent,
    OverviewComponent,
    TodaytasklistComponent,
    ListnameComponent,
    ModalComponent,
    MmodalAddnewTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatButtonModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Ng2TelInputModule,
    MatCardModule,
    MatToolbarModule,
    MatBadgeModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MdbModalModule,
    MatSelectModule,
    NgxMatDatetimePickerModule, 
    NgxMatNativeDateModule, 
    NgxMatTimepickerModule,
    DlDateTimeDateModule, 
    DlDateTimePickerModule 

  ],
  providers: [AuthGuard, {
    provide:HTTP_INTERCEPTORS, useClass: InterceptorServiceService, multi: true
  },
  MatDatepickerModule,
    MatNativeDateModule 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
