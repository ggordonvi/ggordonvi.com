import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AlertComponent } from './components/alerting/alert/alert.component';
import { ManageAlertComponent } from './components/alerting/manage-alert/manage-alert.component';

import { ProjectsComponent } from './pages/projects/projects.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ManageAlertComponent,
    ProjectsComponent,
    JobsComponent,
    SkillsComponent,
    ProfileComponent,
    AboutComponent,
    PortfolioComponent,
    ExperienceComponent
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
