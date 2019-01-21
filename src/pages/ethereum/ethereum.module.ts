import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EthereumPage } from './ethereum';
import { CryptoProvider } from '../../providers/crypto/crypto';

@NgModule({
  declarations: [
    EthereumPage,
  ],
  imports: [
    IonicPageModule.forChild(EthereumPage),
  ],
  providers: [
    CryptoProvider
  ],
})
export class EthereumPageModule {}
