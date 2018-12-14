import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date = new Date();
  year: string;
  constructor() {}

  ngOnInit() {
    this.year = this.date.getFullYear().toString();
  }
}
