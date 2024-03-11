import { Injectable } from '@angular/core';

import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertTimeout = 10000;
  index = 0;
  alerts: Alert[] = [];

  add(message: string, type: string) {
    var newAlert: Alert = {
      id: this.index++,
      message: message,
      type: type
    };
    this.alerts.push(newAlert);
    this.timedRemove(newAlert.id);
  }

  remove (id: number) {
    var i = this.alerts.length;
    while (i--) {
      if (this.alerts[i].id == id) {
        this.alerts.splice(i, 1);
      }
    }
  }

  timedRemove(id: number) {
    setTimeout(() => {
      var i = this.alerts.length;
      while (i--) {
        if (this.alerts[i].id == id) {
          this.alerts.splice(i, 1);
        }
      }
    },this.alertTimeout);
  }

  getAlerts() {
    return this.alerts;
  }

}
