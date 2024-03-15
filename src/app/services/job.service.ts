import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobJsonData = 'assets/data/jobs.json';

  constructor(private http: HttpClient) { }

  getJobData(): Observable<Company[]> {
    return this.http.get<Company[]>(this.jobJsonData);
  }

}
