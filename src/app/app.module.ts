
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentportalComponent } from './studentportal/studentportal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LayoutModule } from '@angular/cdk/layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChartsModule } from 'ng2-charts'
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {CdkTreeModule} from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IdentifyadminComponent } from './identifyadmin/identifyadmin.component';
import { EntercoursesComponent } from './entercourses/entercourses.component';
import { SetquestComponent } from './setquest/setquest.component';
import { OptionsComponent } from './options/options.component';
import { StuAnswersComponent } from './stu-answers/stu-answers.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { DeletecompComponent } from './deletecomp/deletecomp.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UpdatequestComponent } from './updatequest/updatequest.component';
import { MainadminsignupComponent } from './mainadminsignup/mainadminsignup.component';
import { MainadminloginComponent } from './mainadminlogin/mainadminlogin.component';
import { MainadminsidenavComponent } from './mainadminsidenav/mainadminsidenav.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { TutorsComponent } from './tutors/tutors.component';
import { EditformComponent } from './editform/editform.component';
import { FilterPipe } from './filter.pipe';
import { HistoryComponent } from './history/history.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RetryexamComponent } from './retryexam/retryexam.component';
import { SubmitmodalComponent } from './submitmodal/submitmodal.component';
import { StudentnotificationComponent } from './studentnotification/studentnotification.component';
import { HistoryDateComponent } from './history-date/history-date.component';
import { AdminchartComponent } from './adminchart/adminchart.component';
import { ConfirmdeleteComponent } from './confirmdelete/confirmdelete.component';
import { SetforstudentsComponent } from './setforstudents/setforstudents.component';
import { ConverterPipe } from './converter.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewRegComponent } from './new-reg/new-reg.component';
import { ReadingpageComponent } from './readingpage/readingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    StudentportalComponent,
    SidebarComponent,
    AdminComponent,
    AdminloginComponent,
    AdminsidebarComponent,
    AdminDashComponent,
    IdentifyadminComponent,
    EntercoursesComponent,
    SetquestComponent,
    OptionsComponent,
    StuAnswersComponent,
    EditcourseComponent,
    DeletecompComponent,
    UpdatequestComponent,
    MainadminsignupComponent,
    MainadminloginComponent,
    MainadminsidenavComponent,
    AllstudentsComponent,
    MaindashboardComponent,
    TutorsComponent,
    EditformComponent,
    FilterPipe,
    HistoryComponent,
    SubmittedComponent,
    NotificationsComponent,
    RetryexamComponent,
    SubmitmodalComponent,
    StudentnotificationComponent,
    HistoryDateComponent,
    AdminchartComponent,
    ConfirmdeleteComponent,
    SetforstudentsComponent,
    ConverterPipe,
    NewRegComponent,
    ReadingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTooltipModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatNativeDateModule, 
    ChartsModule,
    MatDialogModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatIconModule,
    CdkTreeModule,
    MatListModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
