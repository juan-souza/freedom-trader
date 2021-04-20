import {Component, OnInit} from '@angular/core';

import {PanelControlService} from './services/panel-control.service';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.scss']
})
export class PanelControlComponent implements OnInit {
  coins;
  coinSymbols: any[] = [];

  constructor(private service: PanelControlService) {

  }

  ngOnInit(): void {

  }

}
