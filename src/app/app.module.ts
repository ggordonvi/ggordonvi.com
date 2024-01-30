import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AlertComponent } from './components/alerting/alert/alert.component';
import { ManageAlertComponent } from './components/alerting/manage-alert/manage-alert.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileIntroComponent } from './components/profile/profile-intro/profile-intro.component';
import { ProfileAboutComponent } from './components/profile/profile-about/profile-about.component';
import { ProfileSkillsComponent } from './components/profile/profile-skills/profile-skills.component';
import { ProfileExperienceComponent } from './components/profile/profile-experience/profile-experience.component';
import { ProfileProjectsComponent } from './components/profile/profile-projects/profile-projects.component';

import { ProjectsComponent } from './pages/projects/projects.component';

import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './pages/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ManageAlertComponent,
    ProfileComponent,
    ProfileIntroComponent,
    ProfileAboutComponent,
    ProfileSkillsComponent,
    ProfileExperienceComponent,
    ProfileProjectsComponent,
    ProjectsComponent,
    FooterComponent,
    SkillsComponent
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
