import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public footerIllustration:string='' ;

  constructor() { }

  ngOnInit(): void {
    this.footerIllustration = 'assets/img/illustrations/berry_footer_illustration.svg';

  }

}
