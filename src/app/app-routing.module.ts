import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './pages/projects/projects.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WipComponent } from './pages/wip/wip.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectPageComponent } from './pages/projects/project-page/project-page.component';

const routes: Routes = [
  { path: 'wip', component: WipComponent },
  { path: 'profile/skills', component: SkillsComponent },
  { path: 'profile/projects', component: ProjectsComponent },
  { path: 'profile/projects/:id', component: ProjectPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '',   redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', redirectTo: 'profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
