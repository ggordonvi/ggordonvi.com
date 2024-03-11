import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';

import SKILL_DATA from '../data/skills.json';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[] = SKILL_DATA;

  constructor() { }
}
