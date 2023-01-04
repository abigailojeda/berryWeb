import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  public logoWhite:string='' ;
  public logoLinkedin:string='' ;
  public logoDiscord:string='' ;
  public logoFacebook:string='' ;
  public headerIllustration:string='' ;
  public footerIllustration:string='' ;

  public taskIcon:string='';
  public userIcon:string='';
  public partyIcon:string='';

  constructor() { }

  ngOnInit(): void {
    this.logoWhite = 'assets/img/logo/logoBerryWhiteLarge.svg';
    this.logoLinkedin = 'assets/img/rrss/logo-linkedin.svg';
    this.logoDiscord = 'assets/img/rrss/logo-discord.svg';
    this.logoFacebook = 'assets/img/rrss/logo-facebook.svg';
    this.headerIllustration = 'assets/img/illustrations/berry_header_illustration.svg';
    this.footerIllustration = 'assets/img/illustrations/berry_footer_illustration.svg';
    this.taskIcon = 'assets/img/icons/icon-task.svg';
    this.userIcon = 'assets/img/icons/icon-user.svg';
    this.partyIcon = 'assets/img/icons/icon-party.svg';
  }

}
