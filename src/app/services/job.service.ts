import { Injectable } from '@angular/core';

import { Job } from '../objects/job';
import { Role } from '../objects/role';

import WORK_HISTORY_DATA from '../data/jobs.json';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs: Job[] = [];

  constructor() {
    let jsonData = WORK_HISTORY_DATA;
    jsonData.forEach(jobData => {
      this.jobs.push(this.buildJob(jobData));
    });
    // console.log(this.jobs);
  }

  buildJob(jobData: any) {
    var newRoles = this.buildRoles(jobData.roles);

    let jobLength = "";
    let years = 0;
    let months = 0;

    let jobStartDate = new Date(jobData.startDate);
    let jobEndDate = jobData.endDate != "" ? new Date(jobData.endDate) : new Date();

    years = jobEndDate.getFullYear() - jobStartDate.getFullYear();
    months = jobEndDate.getMonth() - jobStartDate.getMonth();

    if (years == 1) {
      jobLength = years + " year ";
    } else {
      jobLength = years + " years ";
    }
    if (months == 1) {
      jobLength += months + " month";
    } else {
      jobLength += months + " months";
    }

    var newJob: Job = {
      name: jobData.name,
      startDate: jobStartDate,
      endDate: jobData.endDate != "" ? new Date(jobData.endDate) : undefined,
      length: jobLength,
      roles: newRoles
    }
    return newJob;
  }

  buildRoles(roleData: any) {
    let roleArray: Role[] = [];
    roleData.slice().reverse().forEach((role: any) => {

      let roleLength = "";
      let years = 0;
      let months = 0;

      let roleStartDate = new Date(role.startDate);
      let roleEndDate = role.endDate != "" ? new Date(role.endDate) : new Date();

      years = roleEndDate.getFullYear() - roleStartDate.getFullYear();
      months = roleEndDate.getMonth() - roleStartDate.getMonth();

      if (years == 1) {
        roleLength = years + " year ";
      } else {
        roleLength = years + " years ";
      }
      if (months == 1) {
        roleLength += months + " month";
      } else {
        roleLength += months + " months";
      }

      var newRole: Role = {
        name: role.name,
        startDate: roleStartDate,
        endDate: role.endDate != "" ? new Date(role.endDate) : undefined,
        length: roleLength,
        description: role.description,
        bulletPoints: role.bulletPoints
      }
      roleArray.push(newRole);
    });
    return roleArray;
  }

}
