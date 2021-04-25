import { ReadingpageComponent } from './readingpage/readingpage.component';
import { NewRegComponent } from './new-reg/new-reg.component';
import { ConfirmdeleteComponent } from './confirmdelete/confirmdelete.component';
import { HistoryDateComponent } from './history-date/history-date.component';
import { StudentnotificationComponent } from './studentnotification/studentnotification.component';
import { RetryexamComponent } from './retryexam/retryexam.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HistoryComponent } from './history/history.component';
import { EditformComponent } from './editform/editform.component';
import { TutorsComponent } from './tutors/tutors.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { MainadminsidenavComponent } from './mainadminsidenav/mainadminsidenav.component';
import { MainadminloginComponent } from './mainadminlogin/mainadminlogin.component';
import { MainadminsignupComponent } from './mainadminsignup/mainadminsignup.component';
import { ChecksignupGuard } from './checksignup.guard';
import { UpdatequestComponent } from './updatequest/updatequest.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
// import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { StuAnswersComponent } from './stu-answers/stu-answers.component';
import { OptionsComponent } from './options/options.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { StudentportalComponent } from './studentportal/studentportal.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EntercoursesComponent } from './entercourses/entercourses.component';
import { SetquestComponent } from './setquest/setquest.component';




const routes: Routes = [
  {path: 'adminlogin', component: AdminloginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: NewRegComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo: 'mainadminlogin', pathMatch: 'full'},
  {path: 'mainadminlogin', component: MainadminloginComponent},
  {path: 'mainadminsignup', component: MainadminsignupComponent},
  {path: 'mainadminsidenav', component: MainadminsidenavComponent, children: [
    {path: '', redirectTo: 'maindashboard', pathMatch: 'full'},
    {path: 'maindashboard', component: MaindashboardComponent},
    {path: 'allstudents', component: AllstudentsComponent},
    {path: 'editform/:id', component: EditformComponent},
    {path: 'tutors', component: TutorsComponent},
    {path: 'register', component: RegisterComponent},
  ]},
  {path: 'adminsidebar', component: AdminsidebarComponent, canActivate: [AuthGuardGuard], 
  children: [
    {path: '', redirectTo: 'adminDash', pathMatch: 'full'},
    {path: 'adminDash', component: AdminDashComponent},
    {path: 'entercourses', component: EntercoursesComponent, children: [
    {path: 'editcourse/:id', component: EditcourseComponent},
    ]
    },
    {path: 'notified/:admin_id', component: NotificationsComponent},
    { path: 'history/:hist_id', component: HistoryDateComponent},
    { path: 'hist_date/:id', component: HistoryComponent },
    {path: 'setquest', component: SetquestComponent, children: [
      { path: 'updatequest/:id', component: UpdatequestComponent },
      {path: 'deletequest/:id', component: ConfirmdeleteComponent},
    ]},
    {path: 'options', component: OptionsComponent},
    ]
  },
  { path: 'stuAnswers/:quest_id', component: StuAnswersComponent },
   {path: 'sidebar', component: SidebarComponent, children: [
     {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
     { path: 'dashboard', component: DashboardComponent },
       {path: 'readbook/:book', component: ReadingpageComponent},
     {path: 'studentportal/:id', component: StudentportalComponent},
     {path: 'notifystudent/:student_id', component: StudentnotificationComponent},
     { path: 'submitted', component: SubmittedComponent },
     {path: 'retry', component: RetryexamComponent}
   ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
