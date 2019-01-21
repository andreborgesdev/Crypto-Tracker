import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { CryptoProvider } from '../../providers/crypto/crypto';
import { Crypto } from '../../models/crypto.model';

@IonicPage()
@Component({
  selector: 'page-ethereum',
  templateUrl: 'ethereum.html',
})
export class EthereumPage {

  currency: string = 'EUR';
  ethereum$: Observable<Crypto>

  constructor(private ethereumProvider: CryptoProvider) { }

  ionViewWillLoad() {
    this.getEthereumPrice();
  }

  getEthereumPrice() {
    this.ethereum$ = this.ethereumProvider.getEthereumPrice(this.currency); 
  }
}
