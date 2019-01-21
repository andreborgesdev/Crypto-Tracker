import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BitcoinPage } from './bitcoin';
import { CryptoProvider } from '../../providers/crypto/crypto';

@NgModule({
  declarations: [
    BitcoinPage,
  ],
  imports: [
    IonicPageModule.forChild(BitcoinPage),
  ],
  providers: [
    CryptoProvider
  ],
})
export class BitcoinPageModule {}
