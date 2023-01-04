import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logoWhite:string='' ;
  public headerIllustration:string='' ;

  constructor() { }

  ngOnInit(): void {
    this.logoWhite = 'assets/img/logo/logoBerryWhiteLarge.svg';
    this.headerIllustration = 'assets/img/illustrations/berry_header_illustration.svg';
  }

}
