import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lijing-second',
  templateUrl: './lijing-second.component.html',
  styleUrls: ['./lijing-second.component.scss'],
})
export class LijingSecondComponent implements OnInit {
  lijingCount = 0;
  ngOnInit(): void {
    setInterval(() => {
      this.lijingCount++;
    }, 1000);
  }
}
