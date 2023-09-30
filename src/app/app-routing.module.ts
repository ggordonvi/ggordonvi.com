import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/projects', pathMatch: 'full' },
  { path: '**', redirectTo: '/projects', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
