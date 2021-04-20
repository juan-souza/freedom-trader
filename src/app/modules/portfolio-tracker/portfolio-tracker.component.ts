import {Component, OnInit} from '@angular/core';

import {CoinService} from './services/coin.service';

@Component({
  selector: 'app-portfolio-tracker',
  templateUrl: './portfolio-tracker.component.html',
  styleUrls: ['./portfolio-tracker.component.scss']
})
export class PortfolioTrackerComponent implements OnInit {
  coins;
  coinSymbols: any[] = [];

  constructor(private coinService: CoinService) {

  }

  ngOnInit(): void {
    this.getCoinSymbols();
    console.log(this.coinSymbols);
  }

  getCoinSymbols() {
    this.coinService.getCoinSymbols('binance', 'usdt').subscribe((res) => {
      Object.values(res).forEach((value) => {
        // @ts-ignore
        this.coinSymbols.push(value.baseSymbol);
      });
    });
  }

}
