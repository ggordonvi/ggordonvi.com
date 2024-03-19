import { Component, Injector, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.getProjectData();
  }

  getProjectData(): void {
    this.projectService.getProjectData()
      .subscribe((data: Project[]) => {
        this.projects = data;
        console.log(this.projects);
      });
  }

}
