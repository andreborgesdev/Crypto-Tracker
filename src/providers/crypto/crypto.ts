import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Crypto } from '../../models/crypto.model';

@Injectable()
export class CryptoProvider {

  private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';

  constructor(private http: HttpClient) { }

  getBitcoinPrice(currency: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL}BTC${currency}`);
  }

  getEthereumPrice(currency: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL}ETH${currency}`);
  }
}
