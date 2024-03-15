import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skillsJsonData = 'assets/data/skills.json';

  constructor(private http: HttpClient) { }

  getSkillData(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillsJsonData);
  }
}
