import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  // styleUrls: ['../overview/Scss/overview.component.scss']
})
export class OverviewComponent implements OnInit {
  image1 = '../../../assets/images/Today.png';
  image2 = '../../../assets/images/upcoming.png';
  image3 = '../../../assets/images/overdue.png';
  title = 'Overview';

  constructor() {}

  ngOnInit(): void {}
}
