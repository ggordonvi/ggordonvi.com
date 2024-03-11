import { Component } from '@angular/core';

import { Alert } from '../../../models/alert';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-manage-alert',
  templateUrl: './manage-alert.component.html',
  styleUrls: ['./manage-alert.component.scss']
})
export class ManageAlertComponent {

  constructor(private alertService: AlertService) { }

  submitted = false;

  alert = new Alert(0, '', '');

  onSubmit() { this.submitted = true; }

  addAlert() {
    console.log("Adding alert: " + this.alert.message + " " + this.alert.type);
    this.alertService.add(this.alert.message, this.alert.type);
  }

}
