import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-profile-projects',
  templateUrl: './profile-projects.component.html',
  styleUrls: ['./profile-projects.component.scss']
})
export class ProfileProjectsComponent implements OnInit {
  
  featuredProjects: Project[] = [];

  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.getFeaturedProjectData();
  }

  getFeaturedProjectData(): void {
    this.projectService.getFeaturedProjects()
      .subscribe((data: Project[]) => {
        this.featuredProjects = data;
      });
  }

}
