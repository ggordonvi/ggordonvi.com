import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './pages/projects/projects.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WipComponent } from './pages/wip/wip.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ArchitectureExplainedComponent } from './pages/projects/pages/architecture-explained/architecture-explained.component';
import { FrontendExplainedComponent } from './pages/projects/pages/frontend-explained/frontend-explained.component';
import { BackendExplainedComponent } from './pages/projects/pages/backend-explained/backend-explained.component';
import { PatchNotesComponent } from './pages/projects/pages/patch-notes/patch-notes.component';

const routes: Routes = [
  { path: 'wip', component: WipComponent },
  { path: 'profile/skills', component: SkillsComponent },
  { path: 'profile/projects', component: ProjectsComponent },
  { path: 'profile/projects/frontend-explained', component: FrontendExplainedComponent },
  { path: 'profile/projects/backend-explained', component: BackendExplainedComponent },
  { path: 'profile/projects/architecture-explained', component: ArchitectureExplainedComponent },
  { path: 'profile/projects/patch-notes', component: PatchNotesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '',   redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', redirectTo: 'profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
