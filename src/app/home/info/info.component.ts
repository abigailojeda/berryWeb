import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public taskIcon: string = '';
  public userIcon: string = '';
  public partyIcon: string = '';

  constructor() { }

  ngOnInit(): void {
    this.taskIcon = 'assets/img/icons/icon-task.svg';
    this.userIcon = 'assets/img/icons/icon-user.svg';
    this.partyIcon = 'assets/img/icons/icon-party.svg';
  }

}
