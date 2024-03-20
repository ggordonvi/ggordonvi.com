import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  projectId: string | null = null;
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      if (this.projectId) {
        this.getProjectDetails(this.projectId);
      } else {
        this.router.navigate(['/profile/projects']);
      }
    });
  }

  getProjectDetails(projectId: string): void {
    this.projectService.getProjectByUid(projectId).subscribe(
      (project: Project | undefined) => {
        if (project) {
          this.project = project;
        } else {
          this.router.navigate(['/profile/projects']);
        }
      },
      (error: any) => {
        this.router.navigate(['/profile/projects']);
      }
    );
  }

}
