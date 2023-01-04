import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public logoLinkedin:string='' ;
  public logoDiscord:string='' ;
  public logoFacebook:string='' ;
  public logoWhite:string='' ;

  constructor() { }

  ngOnInit(): void {
    this.logoLinkedin = 'assets/img/rrss/logo-linkedin.svg';
    this.logoDiscord = 'assets/img/rrss/logo-discord.svg';
    this.logoFacebook = 'assets/img/rrss/logo-facebook.svg';
    this.logoWhite = 'assets/img/logo/logoBerryWhiteLarge.svg';
  }

}
