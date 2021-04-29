import {Component, OnDestroy, OnInit} from '@angular/core';
import {PanelControlService} from './services/panel-control.service';
import {Account} from './models/account';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.scss']
})
export class PanelControlComponent implements OnDestroy, OnInit {
  isCollapsed = false;
  accounts: Account[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: PanelControlService) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 1
    };

    let um: Account;
    let dois: Account;

    um = new Account();
    um.id = 1;
    um.name = '1';
    um.isCollapsed = true;
    um.exchange = 'binance';
    um.balance = [{name: 'aaaa', name2: 'aaaa'}, {name: 'aaaa', name2: 'aaaa'}];

    dois = new Account();
    dois.id = 2;
    dois.name = '2';
    dois.isCollapsed = true;
    dois.exchange = 'coinbase';
    dois.balance = [{name: 'aaaa', name2: 'aaaa'}, {name: 'aaaa', name2: 'aaaa'}];

    this.accounts.push(um);
    this.accounts.push(dois);
    this.service.findAll().subscribe(data => {
      console.log(data);
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
