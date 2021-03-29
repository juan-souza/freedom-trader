import {Component, OnInit} from '@angular/core';
import {User} from '../users/models/user';

@Component({
  selector: 'app-access-point',
  templateUrl: './access-point.component.html',
  styleUrls: ['./access-point.component.scss']
})
export class AccessPointComponent implements OnInit {

  users: User[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
