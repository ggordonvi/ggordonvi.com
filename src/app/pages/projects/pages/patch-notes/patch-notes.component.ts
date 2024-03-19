import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-patch-notes',
  templateUrl: './patch-notes.component.html',
  styleUrls: ['./patch-notes.component.scss']
})
export class PatchNotesComponent implements OnInit {

  uid = "patch-notes";
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
