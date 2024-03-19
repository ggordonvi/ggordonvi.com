import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-frontend-explained',
  templateUrl: './frontend-explained.component.html',
  styleUrls: ['./frontend-explained.component.scss']
})
export class FrontendExplainedComponent implements OnInit {

  uid = "frontend-explained";
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
