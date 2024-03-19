import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AlertComponent } from './components/alerting/alert/alert.component';
import { ManageAlertComponent } from './components/alerting/manage-alert/manage-alert.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileIntroComponent } from './components/profile-intro/profile-intro.component';
import { ProfileAboutComponent } from './components/profile-about/profile-about.component';
import { ProfileSkillsComponent } from './components/profile-skills/profile-skills.component';
import { ProfileExperienceComponent } from './components/profile-experience/profile-experience.component';
import { ProfileProjectsComponent } from './components/profile-projects/profile-projects.component';

import { ProjectsComponent } from './pages/projects/projects.component';

import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { FrontendExplainedComponent } from './pages/projects/pages/frontend-explained/frontend-explained.component';
import { BackendExplainedComponent } from './pages/projects/pages/backend-explained/backend-explained.component';
import { PatchNotesComponent } from './pages/projects/pages/patch-notes/patch-notes.component';
import { ArchitectureExplainedComponent } from './pages/projects/pages/architecture-explained/architecture-explained.component';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';

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
    SkillsComponent,
    FrontendExplainedComponent,
    BackendExplainedComponent,
    PatchNotesComponent,
    ArchitectureExplainedComponent,
    ProjectHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
