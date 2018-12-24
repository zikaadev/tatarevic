import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrong-url',
  templateUrl: './wrong-url.component.html',
  styleUrls: ['./wrong-url.component.scss']
})
export class WrongUrlComponent implements OnInit {
  @Output() rightUrl = new EventEmitter<boolean>();

  constructor(private router: Router) {
    this.rightUrl.emit(false);
  }

  ngOnInit() {}

  goTo(link: string) {
    // this.router.navigate([link]);
    window.location.href = link;
  }
}
