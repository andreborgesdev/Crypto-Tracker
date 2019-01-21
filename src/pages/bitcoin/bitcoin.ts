import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { CryptoProvider } from '../../providers/crypto/crypto';
import { Crypto } from '../../models/crypto.model';

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {

  currency: string = 'EUR';
  bitcoin$: Observable<Crypto>

  constructor(private bitcoinProvider: CryptoProvider) { }

  ionViewWillLoad() {
    this.getBitcoinPrice();
  }

  getBitcoinPrice() {
    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency); 
  }
}
