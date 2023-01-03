import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  public logoWhite:string='' ;
  public headerIllustration:string='' ;

  constructor() { }

  ngOnInit(): void {
    this.logoWhite = 'assets/img/logo/logoBerryWhiteLarge.svg';
    this.headerIllustration = 'assets/img/illustrations/berry_header_illustration.svg';
  }

}
