import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.scss']
})
export class ProfileExperienceComponent implements OnInit {

  jobs: Company[] = [];
  
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getCompanyData();
  }

  getCompanyData(): void {
    this.jobService.getJobData()
      .subscribe((data: Company[]) => {
        this.jobs = data;
      });
  }

}
