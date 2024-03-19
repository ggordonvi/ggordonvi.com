import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-architecture-explained',
  templateUrl: './architecture-explained.component.html',
  styleUrls: ['./architecture-explained.component.scss']
})
export class ArchitectureExplainedComponent implements OnInit {

  uid = "architecture-explained";
  project: Project | undefined;

  constructor(private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.getProjectData();
  }

  getProjectData(): void {
    this.projectService.getProjectByUid(this.uid)
      .subscribe((data: Project | undefined) => {
        this.project = data;
      });
  }

}
