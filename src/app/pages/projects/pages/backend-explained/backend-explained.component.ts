import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-backend-explained',
  templateUrl: './backend-explained.component.html',
  styleUrls: ['./backend-explained.component.scss']
})
export class BackendExplainedComponent implements OnInit {

  uid = "backend-explained";
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
