import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './pages/projects/projects.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WipComponent } from './pages/wip/wip.component';

const routes: Routes = [
  { path: 'wip', component: WipComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '',   redirectTo: '/wip', pathMatch: 'full' },
  { path: '**', redirectTo: '/wip', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
