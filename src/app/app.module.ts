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

import { SkillsComponent } from './pages/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { ThemeSelectComponent } from './components/theme-select/theme-select.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectContentComponent } from './components/project-content/project-content.component';
import { ProjectPageComponent } from './pages/projects/project-page/project-page.component';

import { SwiperModule } from 'swiper/angular';

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
    SkillsComponent,
    ProjectHeaderComponent,
    ThemeSelectComponent,
    HeaderComponent,
    FooterComponent,
    ProjectContentComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
