import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alerting/alert/alert.component';
import { ManageAlertComponent } from './components/alerting/manage-alert/manage-alert.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { IntroComponent } from './components/intro/intro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BannerComponent } from './components/banner/banner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { WipComponent } from './pages/wip/wip.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ManageAlertComponent,
    ProjectsComponent,
    NavbarComponent,
    JobsComponent,
    IntroComponent,
    SkillsComponent,
    BannerComponent,
    SidebarComponent,
    ProfileComponent,
    BreadcrumbComponent,
    WipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
