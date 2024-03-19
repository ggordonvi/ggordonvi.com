import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectJsonData = 'assets/data/projects.json';

  constructor(private http: HttpClient) { }

  getProjectData(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectJsonData);
  }

  getProjectByUid(uid: string): Observable<Project | undefined> {
    return this.getProjectData().pipe(
      map(projects => projects.find(project => project.uid === uid))
    );
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getProjectData().pipe(
      map(projects => projects.filter(project => project.featured))
    );
  }
  
}
