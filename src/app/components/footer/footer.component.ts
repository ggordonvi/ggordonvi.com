import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: string | undefined;

  constructor() { }

  ngOnInit(): void {
    const year = new Date().getFullYear();
    this.currentYear = year.toString();
  }
  
}
